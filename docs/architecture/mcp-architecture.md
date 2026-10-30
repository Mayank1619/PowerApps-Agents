# MCP Architecture

Status: proposed. No MCP server is enabled by the repository.

## Client and Tool Boundary

```mermaid
flowchart LR
  User[Developer] --> Copilot[Copilot interface]
  Copilot --> Instructions[Repository instructions and approval rules]
  Copilot --> Client[Locally configured MCP client]
  Client -->|tool discovery| Server[Approved MCP server]
  Client -->|validated structured input| Server
  Server --> Auth[Existing approved identity]
  Auth --> Graph[Fixed Microsoft Graph operations]
  Graph --> SP[Approved SharePoint resources]
  SP -->|untrusted content and metadata| Server
  Server -->|sanitized structured response| Client
  Client --> Copilot
  Copilot -->|proposal, not authority| User
  Policy[Tool/site allowlist and read-only policy] --> Server
  Audit[Sanitized operational audit] <-->|no token or sensitive values| Server
```

## Required Controls

- Verify publisher, source, license, package integrity, authentication, exposed tools, and organizational approval before registration.
- Limit the initial tool set to read-only metadata and selected fields. Enforce page-size, response-size, timeout, retry, and rate-limit limits.
- Validate all inputs with fixed schemas and validate site/list/library identifiers against approved scope. Never expose arbitrary Graph requests, URL fetches, commands, or prompt-controlled permissions.
- Treat returned SharePoint text as untrusted data. Do not follow instructions embedded in metadata or file content.
- Sanitize logs, exclude tokens and sensitive field values, and use correlation IDs for operational diagnosis.
- Keep write operations absent or disabled; deletion remains disabled. No server starts with production targets or credentials embedded in source.
- Store active user configuration outside the repository. The committed `.vscode/mcp.example.json` is intentionally empty.

## Availability and Fallback

No locally configured approved SharePoint server was detected in Phase 0. Organization approval is still unknown. Do not build or deploy a replacement until the organization confirms that no suitable approved server exists and reviews the proposed implementation.
