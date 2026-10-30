# Deployment Preparation and Rollback

## Purpose

Prepare a human-reviewed release plan without executing deployment.

## Prerequisites

Approved source artifact/version, named source/destination environments, dependencies, independent QA evidence, protected target, named approver, pre/post tests, and rollback method. No deployment workflow is active.

## Inputs

Artifact inventory/hash/version, environment aliases, connection references, environment variables (names only), workspace/site mappings, owners, approval record, and recovery window.

## Procedure

1. Use `docs/runbooks/reference-solution-deployment.md` as a planning template.
2. Verify package format/import/export support against installed Microsoft tooling and official help.
3. Confirm each target is explicitly named and not inferred from a default profile.
4. Verify required reviewers/protected environment settings with the repository/environment owner.
5. Review pre-deployment tests, dependencies, connection mappings, data migrations, DLP, smoke tests, monitoring, and rollback.
6. Record the plan and approval record. Do not run deployment/import/export/publish commands.

## Expected Result

A complete deployment instruction set with artifact version, named approver, validated dependencies, pre/post checks, and rollback; no external resource changes.

## Validation

Independent reviewer confirms evidence and rollback readiness; `npm run validate` checks repository structure only and does not approve deployment.

## Common Failures

Unknown destination, missing approver, unverified package format, unresolved connection reference, or no rollback. Stop; production is never a default.

## Safe Rollback

The disabled template `.github/workflows/deployment-template.yml.disabled` contains no deployment operation. A real rollback is an external write and requires a separate operation-specific approval and authorized operator.

## Escalation

Ask release owner, target-environment owner, independent QA reviewer, and service/security owner to resolve gaps.
