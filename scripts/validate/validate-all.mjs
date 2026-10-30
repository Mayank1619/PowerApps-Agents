import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { checkWorkspace } from './workspace-checks.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const checks = checkWorkspace(root);
const failed = checks.filter((check) => !check.passed);
const timestamp = new Date().toISOString();
const report = { timestamp, passed: failed.length === 0, checks };

const outputDirectory = path.join(root, '.local-output');
fs.mkdirSync(outputDirectory, { recursive: true });
fs.writeFileSync(path.join(outputDirectory, 'validation-report.json'), `${JSON.stringify(report, null, 2)}\n`);

const summary = [
  '# Master Validation Summary', '', `Generated: ${timestamp}`, `Result: ${report.passed ? 'PASS' : 'FAIL'}`, '',
  ...checks.map((check) => `- ${check.passed ? 'PASS' : 'FAIL'}: ${check.name}${check.details.length ? ` (${check.details.join('; ')})` : ''}`),
  '', 'Local repository checks only. This report does not verify live service access, PBIP/PBIR compatibility, DAX execution, Power Query refresh, MCP runtime, accessibility in Power BI, or deployment safety.', '',
];
fs.writeFileSync(path.join(root, 'docs', 'build-log', 'validation-summary.md'), summary.join('\n'));

for (const check of checks) {
  console.log(`${check.passed ? 'PASS' : 'FAIL'} ${check.name}${check.details.length ? `: ${check.details.join('; ')}` : ''}`);
}
console.log(`Validation ${report.passed ? 'passed' : 'failed'}; report: .local-output/validation-report.json`);
if (failed.length) process.exitCode = 1;