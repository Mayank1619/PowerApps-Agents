import fs from 'node:fs';
import path from 'node:path';
import { findPotentialSecrets } from './secrets-check.mjs';

const requiredFiles = [
  'README.md', 'SECURITY.md', '.github/copilot-instructions.md',
  '.github/workflows/ci.yml', '.github/workflows/deployment-template.yml.disabled', '.github/dependabot.yml',
  '.vscode/mcp.example.json', 'config/governance-policy.yaml',
  'config/tool-allowlist.yaml', 'docs/status.md', 'docs/build-log/phase-00.md',
  'docs/architecture/solution-overview.md', 'docs/runbooks/sharepoint-mcp-setup.md',
  'sharepoint/samples/internal-delivery-capacity.synthetic.json',
  'powerbi/dax/internal-delivery-capacity-measures.md',
  'powerbi/reports/internal-delivery-capacity-pages.md',
  'power-platform/flows/flow-specification.template.md',
];

const requiredDirectories = [
  '.github/agents', '.github/instructions', '.github/prompts', '.github/workflows', 'config/environments',
  'mcp/sharepoint/src', 'mcp/sharepoint/tests', 'mcp/sharepoint/schemas',
  'powerbi/projects', 'powerbi/semantic-models', 'powerbi/reports',
  'power-platform/solutions', 'power-platform/flows', 'sharepoint/schemas',
  'sharepoint/samples', 'tests/unit', 'tests/security', 'scripts/validate',
  'docs/architecture', 'docs/build-log',
];

function walkFiles(directory) {
  const files = [];
  if (!fs.existsSync(directory)) return files;
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (['.git', 'node_modules', '.local-output'].includes(entry.name)) continue;
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...walkFiles(fullPath));
    else if (entry.isFile()) files.push(fullPath);
  }
  return files;
}

export function checkSyntheticFixture(fixture) {
  const errors = [];
  const collections = ['Consultants', 'Skills', 'ConsultantSkills', 'Assignments', 'ClientDemand', 'TrainingProgress', 'Availability'];
  if (!fixture || !/synthetic/i.test(fixture.notice ?? '')) return ['Fixture must identify itself as synthetic.'];
  for (const name of collections) if (!Array.isArray(fixture[name])) errors.push(`${name} must be an array.`);
  if (errors.length) return errors;

  const consultantKeys = new Set(fixture.Consultants.map((row) => row.ConsultantKey));
  const skillKeys = new Set(fixture.Skills.map((row) => row.SkillKey));
  const demandKeys = new Set(fixture.ClientDemand.map((row) => row.DemandKey));
  for (const row of fixture.ConsultantSkills) {
    if (!consultantKeys.has(row.ConsultantKey)) errors.push(`Unknown consultant in ${row.ConsultantSkillKey}.`);
    if (!skillKeys.has(row.SkillKey)) errors.push(`Unknown skill in ${row.ConsultantSkillKey}.`);
  }
  for (const row of fixture.ClientDemand) if (!skillKeys.has(row.SkillKey)) errors.push(`Unknown skill in ${row.DemandKey}.`);
  for (const row of fixture.Assignments) {
    if (!consultantKeys.has(row.ConsultantKey)) errors.push(`Unknown consultant in ${row.AssignmentKey}.`);
    if (row.DemandKey && !demandKeys.has(row.DemandKey)) errors.push(`Unknown demand in ${row.AssignmentKey}.`);
    if (!Number.isFinite(row.AllocationPercent) || row.AllocationPercent < 0 || row.AllocationPercent > 100) errors.push(`Invalid allocation in ${row.AssignmentKey}.`);
  }
  for (const row of [...fixture.TrainingProgress, ...fixture.Availability]) {
    if (!consultantKeys.has(row.ConsultantKey)) errors.push('Unknown consultant in training or availability record.');
  }
  return errors;
}

export function checkWorkspace(root) {
  const checks = [];
  const add = (name, errors) => checks.push({ name, passed: errors.length === 0, details: errors });
  add('required files', requiredFiles.filter((file) => !fs.existsSync(path.join(root, file))).map((file) => `Missing ${file}.`));
  add('required directories', requiredDirectories.filter((directory) => !fs.existsSync(path.join(root, directory))).map((directory) => `Missing ${directory}.`));

  const files = walkFiles(root);
  const jsonErrors = [];
  for (const file of files.filter((entry) => entry.endsWith('.json'))) {
    try { JSON.parse(fs.readFileSync(file, 'utf8')); }
    catch (error) { jsonErrors.push(`${path.relative(root, file)}: ${error.message}`); }
  }
  add('JSON syntax', jsonErrors);

  const agentDirectory = path.join(root, '.github', 'agents');
  const agentFiles = fs.existsSync(agentDirectory) ? fs.readdirSync(agentDirectory).filter((file) => file.endsWith('.agent.md')) : [];
  const agentErrors = [];
  if (agentFiles.length !== 8) agentErrors.push(`Expected 8 agent definitions; found ${agentFiles.length}.`);
  for (const file of agentFiles) {
    const text = fs.readFileSync(path.join(agentDirectory, file), 'utf8');
    if (!/^---\r?\nname: .+\r?\ndescription: .+\r?\n---/s.test(text)) agentErrors.push(`${file} lacks name/description metadata.`);
    if (!/Draft definition/i.test(text)) agentErrors.push(`${file} must remain marked as a draft until client support is verified.`);
    if (/^tools\s*:/m.test(text)) agentErrors.push(`${file} unexpectedly declares tools.`);
  }
  add('agent draft metadata', agentErrors);

  const mcpErrors = [];
  const mcpPath = path.join(root, '.vscode', 'mcp.example.json');
  if (fs.existsSync(mcpPath)) {
    const config = JSON.parse(fs.readFileSync(mcpPath, 'utf8'));
    if (!config.servers || Object.keys(config.servers).length !== 0) mcpErrors.push('Example MCP server map must remain empty until approval.');
  }
  add('MCP disabled by default', mcpErrors);

  const policyErrors = [];
  const policyPath = path.join(root, 'config', 'governance-policy.yaml');
  const allowlistPath = path.join(root, 'config', 'tool-allowlist.yaml');
  if (fs.existsSync(policyPath)) {
    const policy = fs.readFileSync(policyPath, 'utf8');
    for (const rule of ['external_model_apis: deny', 'production_targeting: deny', 'live_writes: deny', 'destructive_operations: deny']) {
      if (!policy.includes(rule)) policyErrors.push(`Missing policy rule: ${rule}.`);
    }
  }
  if (fs.existsSync(allowlistPath) && !/enabled_tools:\s*\[\s*\]/.test(fs.readFileSync(allowlistPath, 'utf8'))) policyErrors.push('Default enabled tool list must be empty.');
  add('deny-by-default governance', policyErrors);

  const fixturePath = path.join(root, 'sharepoint', 'samples', 'internal-delivery-capacity.synthetic.json');
  const fixtureErrors = fs.existsSync(fixturePath)
    ? checkSyntheticFixture(JSON.parse(fs.readFileSync(fixturePath, 'utf8')))
    : ['Synthetic fixture is missing.'];
  add('synthetic fixture contracts', fixtureErrors);

  const markdownErrors = [];
  for (const file of files.filter((entry) => entry.endsWith('.md'))) {
    const text = fs.readFileSync(file, 'utf8');
    if ((text.match(/^```/gm) ?? []).length % 2 !== 0) markdownErrors.push(`${path.relative(root, file)} has an unmatched fenced code block.`);
    if (text.length > 0 && !text.endsWith('\n')) markdownErrors.push(`${path.relative(root, file)} lacks a final newline.`);
  }
  add('Markdown structure', markdownErrors);

  const gitignore = fs.existsSync(path.join(root, '.gitignore')) ? fs.readFileSync(path.join(root, '.gitignore'), 'utf8') : '';
  const ignoreErrors = ['.env', '*.pem', '*.key', '.vscode/mcp.json', 'node_modules/', 'deployment-output/']
    .filter((rule) => !gitignore.includes(rule)).map((rule) => `Missing ignore rule ${rule}.`);
  add('secret and local-output ignore rules', ignoreErrors);

  add('high-confidence secret scan', findPotentialSecrets(files, root));

  const workflowErrors = [];
  const ciPath = path.join(root, '.github', 'workflows', 'ci.yml');
  const disabledDeploymentPath = path.join(root, '.github', 'workflows', 'deployment-template.yml.disabled');
  if (fs.existsSync(ciPath)) {
    const workflow = fs.readFileSync(ciPath, 'utf8');
    if (!/permissions:\s*\n\s+contents:\s*read/.test(workflow)) workflowErrors.push('CI must use contents: read permissions.');
    if ([...workflow.matchAll(/uses:\s*actions\/[\w-]+@([0-9a-f]{40})/g)].length < 3) workflowErrors.push('CI actions must be pinned to immutable commit SHAs.');
    if (/pull_request_target|workflow_run/.test(workflow)) workflowErrors.push('Privileged pull_request_target/workflow_run triggers are not allowed.');
    if (!/github\.event\.repository\.private\s*==\s*false/.test(workflow)) workflowErrors.push('Dependency review must be gated until repository/GHAS availability is confirmed.');
  }
  if (fs.existsSync(disabledDeploymentPath) && fs.existsSync(path.join(root, '.github', 'workflows', 'deployment-template.yml'))) {
    workflowErrors.push('Deployment template must not exist under an active workflow extension.');
  }
  add('CI and disabled deployment boundaries', workflowErrors);
  return checks;
}