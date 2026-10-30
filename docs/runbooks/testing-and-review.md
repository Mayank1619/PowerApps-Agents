# Testing and Generated-Change Review

## Purpose

Validate local artifacts and review AI-generated proposals before they are accepted.

## Prerequisites

Node.js/npm for the current built-in suite; synthetic fixtures; requirements and applicable standards. PowerShell runtime validation is currently blocked by machine policy.

## Inputs

Changed files, requirement/acceptance references, test data classification, available validators, and an independent reviewer for security-sensitive changes.

## Procedure

1. Run `npm test`, `npm run lint`, `npm run security`, and `npm run validate`.
2. Inspect every diff; verify no secrets, real IDs, personal values, generated production samples, or unexpected tool configuration were added.
3. Trace every metric, flow action, schema, and report visual to an approved requirement.
4. Check positive, negative, blank, boundary, malformed, oversized, timeout, permission-denied, and duplicate cases as appropriate.
5. Have an independent QA/governance reviewer assess failures, warnings, residual risk, evidence, and rollback.
6. Do not claim live integration, PBIP/PBIR, DAX, M refresh, accessibility, or deployment validation unless it was actually performed in an approved environment.

## Expected Result

Passing local checks, reviewed diff, requirement traceability, synthetic fixtures, recorded evidence, and explicit unresolved gaps.

## Validation

Master summary is written to `docs/build-log/validation-summary.md`; machine-readable details go to ignored `.local-output/validation-report.json`.

## Common Failures

Missing tool, execution-policy restriction, stale synthetic relation, unapproved metric, or unsupported project format. Report it; do not bypass the control.

## Safe Rollback

Revert only the reviewed local change. Do not reset unrelated user changes or execute an external rollback automatically.

## Escalation

Route business-definition gaps to owners, security findings to security, and tool/runtime gaps to the designated platform owner.
