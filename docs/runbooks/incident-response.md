# Incident Response Runbook

## Purpose

Respond to suspected secret/data exposure, unauthorized service access, or unintended external operations.

## Prerequisites

Organization incident channel, security owner, relevant service owner, and the authoritative procedure in `docs/security/incident-response.md`. Do not use a public issue for sensitive details.

## Inputs

Sanitized time, tool/version, operation category, environment category, error/correlation code, and observed impact. Never copy secrets or sensitive record values into the incident artifact.

## Procedure

1. Stop the task and do not retry.
2. Disable the affected local integration using its approved procedure.
3. Preserve sanitized evidence and report through the approved security channel.
4. Ask the authorized identity/service owner to assess containment and any credential revocation/rotation.
5. Assess prompts, logs, telemetry, source history, model-provider boundary, and downstream copies.
6. Resume only after the incident owner approves containment and remediation.

## Expected Result

Incident owner has a sanitized timeline, affected-scope assessment, containment owner, and approved recovery plan.

## Validation

Verify containment with the service owner; check local artifacts and logs for residual sensitive data without copying it elsewhere.

## Common Failures

Unknown endpoint, missing owner, suspected production impact, or secret in history. Escalate immediately; do not attempt cleanup or force-push.

## Safe Rollback

External rollback or credential revocation is performed only by authorized owners under the incident plan.

## Escalation

Use the organization security incident channel; notify MCP, identity, SharePoint, Power BI, or Power Platform owners as relevant.
