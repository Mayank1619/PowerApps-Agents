# Phase 14 Build Log: Operational Runbooks

Date: 2026-10-29
Status: complete; runbooks document procedures and gates only.

## Objective

Complete developer, integration, testing, troubleshooting, security, and release runbooks without executing live operations.

## Actions Completed

- Added an index and task-focused runbooks for initial setup/onboarding, Copilot and agent use, MCP, environment/site routing, Power BI, flows, testing/review, authentication, credentials, deployment/rollback, MCP failures, and incident response.
- Documented current missing tools, SharePoint MCP owner gate, and PowerShell execution-policy blocker.
- Kept deployment, credential, permission, and tenant operations as separately approved procedures.

## Files Created

- `docs/runbooks/README.md`
- `docs/runbooks/initial-setup-and-onboarding.md`
- `docs/runbooks/mcp-registration-and-disablement.md`
- `docs/runbooks/development-environment-and-site.md`
- `docs/runbooks/powerbi-model-report.md`
- `docs/runbooks/flow-development.md`
- `docs/runbooks/testing-and-review.md`
- `docs/runbooks/authentication-and-cli-troubleshooting.md`
- `docs/runbooks/credential-rotation.md`
- `docs/runbooks/deployment-and-rollback.md`
- `docs/runbooks/mcp-troubleshooting.md`
- `docs/runbooks/incident-response.md`
- `docs/build-log/phase-14.md`

## Files Modified

None outside this phase; status update is pending.

## Commands Executed

None for this phase.

## Tools Used

Local file editing only.

## Validations

- Confirmed all 12 new runbook/index files exist and each operational runbook has purpose, prerequisites, inputs, procedure, expected result, validation, common failures, rollback, and escalation sections.
- `npm run validate`: all 11 mandatory local checks passed.
- No live service or credential operation was performed.

## Security Observations

Runbooks do not grant permissions or authorize live service operations. No actual credential rotation, MCP registration, flow/report publishing, or deployment is performed.

## Assumptions

Organization owners will provide authoritative endpoints, local procedures, data classification, and escalation contacts before operators use these guides.

## Blockers

SharePoint/MCP owner response, repository host/visibility, GHAS entitlement, protected environment reviewer, and organization-specific incident/identity contacts are unknown.

## Permissions Required

None to author documents. Live integration and deployment permissions are not requested.

## Risks and Rollback

Risk: generic guidance may not match organization-specific policy. Treat missing local owner/procedure as a stop condition and replace this template only after approval.

## Next Safe Phase

Phase 14 complete. Complete final handover and known-limitations documentation; do not execute deployment.
