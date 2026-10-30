# Secure Configuration

Status: mandatory configuration rules for local development.

## Repository Configuration

- Commit examples only: empty MCP server map, disabled environment allowlists, and no real IDs, endpoints, secrets, or credentials.
- Keep `.env`, local MCP settings, certificates, private keys, auth caches, local telemetry, and deployment output ignored.
- Add a setting only after its official consumer, exact name, expected value type, source, and security purpose are verified.
- Fail closed if a required development allowlist, identity, or approval is missing. Production remains disabled.

## Tool Configuration

- Review publisher, source, version, license, exposed tools, authentication, endpoints, logging, telemetry, and update behavior before enabling an integration.
- Prefer read-only tools. Do not rely on natural-language instructions as the only defense against write-capable tools.
- Never enable arbitrary Graph requests, URL fetching, shell execution, client-selected permissions, or production routing.
- Treat configured scopes/allowlists as restrictions, not grants; service permissions remain authoritative.

## Logs and Generated Artifacts

- Record command names, outcomes, sanitized error classes, and correlation IDs only when useful.
- Exclude tokens, credentials, personal/confidential values, full list items, auth-profile output, and production samples.
- Use synthetic fixtures; inspect generated reports before sharing them.
- Verify dependency integrity and scan artifacts before review; do not auto-update runtime integrations without owner approval.

## Disablement

Document a local method to disable each MCP server and integration before enabling it. Disabling a client does not revoke service permissions or stop a remotely hosted service; those operations require their authorized owner.
