# Authentication and CLI Troubleshooting

## Purpose

Diagnose local GitHub/Microsoft CLI and identity problems without exposing credentials or creating new authorization.

## Prerequisites

An approved account, exact intended development target, official installed CLI help, and owner contact. Azure CLI, PAC CLI, and GitHub Copilot CLI are not verified here; `copilot` is a VS Code shim.

## Inputs

Sanitized command name/version, error code/class, cloud category if explicitly known, target alias, and expected identity category. Never request token output, passwords, client secrets, or full auth-profile listings.

## Procedure

1. Verify executable source and version using official local help; do not assume a shim is the intended CLI.
2. Check identity state using a documented status-only option that does not print tokens or personal identifiers.
3. For PAC, note that `pac auth create` changes local auth state and requires explicit developer authorization; `pac auth list` may reveal usernames/URLs; `pac auth token` displays a token and is prohibited.
4. For Azure CLI/FlowAgent, remember they may use separate identity caches. Do not switch accounts silently.
5. Compare cloud, tenant category, environment alias, and endpoint to approved documentation; stop when any are unknown.
6. Capture only sanitized error codes/classes and follow current official troubleshooting guidance.

## Expected Result

The failure is classified without credential exposure, or the workflow stops with an exact owner request.

## Validation

Repeat only a documented read-only status check after an approved correction. Verify intended identity/target category, not raw token contents.

## Common Failures

CLI missing, shim resolved, expired session, wrong cloud, cached account mismatch, missing consent, unapproved scope, or restricted script execution. Do not install, authenticate, grant, or change policy without the relevant approval.

## Safe Rollback

Do not delete auth caches or profiles as a first-line fix. Use the vendor-documented sign-out/disable procedure only after owner approval.

## Escalation

Ask the identity owner about authentication, environment owner about access, organization Copilot owner about CLI policy, and platform/security owner about required scopes.
