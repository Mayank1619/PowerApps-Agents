# Power BI MCP Validation

Status: not executed; extension not installed and no model target selected.

## Purpose

Define the acceptance checks for a future approved Power BI Authoring MCP validation without modifying a semantic model.

## Prerequisites

- Microsoft-published extension verified from its official Marketplace entry.
- Explicit organizational approval of extension, EULA, telemetry, and GitHub Copilot data handling.
- User-local MCP configuration uses the documented read-only mode and the approved identity.
- A harmless, explicitly approved development model/project is selected. Never use production by default.

## Procedure

1. Start the server only after the prerequisites are met; verify its exact version and process source.
2. Discover exposed tools and confirm effective read-only behavior. If write/delete/deploy operations remain available, stop and do not connect to a valuable model.
3. Verify authentication uses the intended existing identity without displaying tokens.
4. Inspect only model metadata needed for validation. Avoid listing sensitive values or querying business data.
5. If approved, run a harmless schema-only or aggregate DAX query with no sensitive values; record query purpose and result shape, not returned personal data.
6. Confirm the model has not changed using its before/after metadata or a supported local diff.
7. Review sanitized logs for tokens, model values, or unexpected endpoints; stop if data leakage is observed.

## Expected Result

Server starts; tools are discoverable; the approved identity is respected; the selected model schema can be read; any approved query succeeds; no model object is changed; logs are sanitized.

## Validation Evidence

Record date, extension/server version, client profile, identity category (not username/token), target category (not unapproved ID), read-only evidence, query category, before/after change check, log review, and operator. Do not store raw model output.

## Common Failures and Safe Rollback

- Missing identity, permission, target, or tenant policy: stop and request the minimum documented developer/admin action.
- Server fails to start or effective mode cannot be established: disable the server; do not retry an unverified command.
- Unexpected write capability, endpoint, or sensitive logging: stop, disconnect, preserve sanitized evidence, and escalate.
- Rollback is limited to disabling/unregistering the local MCP server. Do not alter tenant settings or model permissions.
