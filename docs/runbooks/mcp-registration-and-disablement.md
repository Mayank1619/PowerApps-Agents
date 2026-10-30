# MCP Registration and Disablement

## Purpose

Safely register or disable an approved MCP server in user-local configuration.

## Prerequisites

Organization approval for the exact publisher/version, client, identity, network endpoints, tools, telemetry, data handling, and disablement method. The MCP approval checklist must be complete. The committed `.vscode/mcp.example.json` is intentionally empty.

## Inputs

Official server documentation, approved user-local config path/schema, approved development scope, read-only tool inventory, authentication instructions, and support owner. Do not infer scopes or copy IDs/secrets from messages.

## Procedure

1. Verify installed client version and configuration schema through its local help/official docs.
2. Review exact tools and require that writes are absent or technically disabled for the intended read-only workflow.
3. Keep active config and auth caches outside Git; never edit a committed example into a live config containing credentials.
4. Add only the server and tools specifically approved by the owner; do not deploy an MCP server or create an application registration under this runbook.
5. Restart the client using its documented procedure; inspect the discovered tool list before any call.
6. For disablement, use the approved client's documented disable/unregister method and verify tools are no longer available.

## Expected Result

Only approved tools appear in the intended client profile; no write, production, or arbitrary request capability is exposed by default.

## Validation

Validate server identity, effective read-only mode, exact tool inventory, identity category, selected development scope, sanitized logs, and disablement. A successful startup alone is not authorization.

## Common Failures

Unknown config schema, missing tool, account mismatch, endpoint mismatch, auth failure, or write tools visible. Stop; do not guess a schema or permission.

## Safe Rollback

Disable/unregister locally and preserve sanitized evidence. Do not delete remote resources, revoke user permissions, or rotate credentials without the authorized owner.

## Escalation

Contact MCP publisher/support, organization MCP owner, identity owner, and security/privacy reviewer as appropriate.
