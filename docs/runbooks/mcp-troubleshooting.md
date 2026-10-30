# MCP Troubleshooting

## Purpose

Diagnose an approved MCP client's startup, discovery, authentication, and response issues without exposing secrets or broadening access.

## Prerequisites

Approved server inventory, exact client/server version, local help, sanitized logs, and owner/support contacts. No MCP server is currently configured in this workspace.

## Inputs

Server alias, client profile category, version, sanitized error code, correlation ID, approved target category, and whether the tool was read-only. Exclude tokens, site/list IDs, item values, and raw sensitive payloads.

## Procedure

1. Verify the server publisher/source/version and exact local config against official docs.
2. Check whether the MCP client feature is allowed by organization policy; do not change tenant settings to troubleshoot.
3. Confirm the local process/endpoint and expected authentication flow without printing credentials.
4. Inspect the tool list and ensure write tools are unavailable for a read-only session.
5. Review sanitized logs and one harmless local/approved metadata check. Do not retry a write.
6. Disable the server and escalate if endpoint, identity, tool behavior, or returned data differs from approval.

## Expected Result

Root cause is documented or server is disabled pending owner support; no permissions or external resources are changed.

## Validation

Restart only through the documented local client action after an approved correction; verify tool inventory and disabled state before resource calls.

## Common Failures

Invalid config schema, server package missing, startup timeout, auth state mismatch, blocked tenant feature, or sensitive response/logging. Do not infer a command from another MCP client.

## Safe Rollback

Unregister/disable locally. Do not delete server resources, revoke permissions, or alter tenant policy.

## Escalation

Contact server publisher/support, organization MCP owner, Copilot owner, and security/privacy owner.
