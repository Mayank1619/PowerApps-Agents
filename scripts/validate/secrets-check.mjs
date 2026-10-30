import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const ignoredDirectories = new Set(['.git', 'node_modules', '.local-output']);
const secretAssignment = /(?:client[_-]?secret|access[_-]?token|refresh[_-]?token|api[_-]?key)\s*[:=]\s*(['"])(?!\$\{\{)[^'"\r\n]{12,}\1/i;
const privateKey = /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/;

function walk(directory) {
  const files = [];
  if (!fs.existsSync(directory)) return files;
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (ignoredDirectories.has(entry.name)) continue;
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...walk(fullPath));
    else if (entry.isFile()) files.push(fullPath);
  }
  return files;
}

export function findPotentialSecrets(files, baseDirectory = root) {
  const findings = [];
  for (const file of files) {
    const name = path.basename(file);
    if (name === '.env' || /\.(?:pem|key|pfx|p12|keystore)$/i.test(name)) {
      findings.push(`${path.relative(baseDirectory, file)}: secret-bearing file type is not allowed.`);
      continue;
    }
    if (fs.statSync(file).size > 1024 * 1024) continue;
    const text = fs.readFileSync(file, 'utf8');
    if (privateKey.test(text)) findings.push(`${path.relative(baseDirectory, file)}: private-key marker detected.`);
    if (secretAssignment.test(text)) findings.push(`${path.relative(baseDirectory, file)}: possible hard-coded credential assignment.`);
  }
  return findings;
}

const findings = findPotentialSecrets(walk(root));
if (findings.length) {
  for (const finding of findings) console.error(`FAIL ${finding}`);
  process.exitCode = 1;
} else {
  console.log('PASS: no high-confidence credential assignments, private keys, or local secret files detected.');
}