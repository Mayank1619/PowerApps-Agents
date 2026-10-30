import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { checkSyntheticFixture, checkWorkspace } from '../../scripts/validate/workspace-checks.mjs';
import { findPotentialSecrets } from '../../scripts/validate/secrets-check.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const fixturePath = path.join(root, 'sharepoint', 'samples', 'internal-delivery-capacity.synthetic.json');

test('repository checks pass for the current source tree', () => {
  assert.deepEqual(checkWorkspace(root).filter((check) => !check.passed), []);
});

test('synthetic fixture validator rejects a dangling key', () => {
  const fixture = JSON.parse(fs.readFileSync(fixturePath, 'utf8'));
  fixture.Assignments[0].ConsultantKey = 'SYN-MISSING';
  assert.ok(checkSyntheticFixture(fixture).some((error) => error.includes('Unknown consultant')));
});

test('synthetic fixture validator rejects out-of-range allocation', () => {
  const fixture = JSON.parse(fs.readFileSync(fixturePath, 'utf8'));
  fixture.Assignments[0].AllocationPercent = 120;
  assert.ok(checkSyntheticFixture(fixture).some((error) => error.includes('Invalid allocation')));
});

test('high-confidence secret scan detects a credential assignment without echoing its value', () => {
  const key = ['client', 'secret'].join('_');
  const content = `${key}="${'x'.repeat(24)}"`;
  const temporaryPath = path.join(root, 'synthetic-secret-scan-fixture.tmp');
  fs.writeFileSync(temporaryPath, content);
  try {
    const findings = findPotentialSecrets([temporaryPath], root);
    assert.equal(findings.length, 1);
    assert.equal(findings[0].includes('x'.repeat(24)), false);
  } finally {
    fs.rmSync(temporaryPath, { force: true });
  }
});