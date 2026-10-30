# SharePoint MCP

## Decision Status

No locally configured SharePoint MCP server was detected in Phase 0. Marketplace and official-source discovery found no general Microsoft SharePoint MCP extension for the current VS Code Copilot workspace. This does not establish that the organization has no approved remote/internal server. Custom implementation is paused until the organization-designated MCP owner confirms whether an approved suitable server exists.

## Official Options Reviewed

- Microsoft's [Work IQ in Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/add-work-iq) supports the GitHub Copilot harness in Copilot Studio and can include a SharePoint workload. It requires the Copilot Studio agent/harness, uses Copilot Credits, and exposes workload-level scope; its documentation says write operations are on by default. It is not a drop-in local VS Code MCP server and is not approved/configured here.
- Microsoft's [SharePoint MCP tools for Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/mcp-sharepoint-tools) are preview, include destructive/share/write tools, and are explicitly described as legacy/backward-compatibility rather than for new projects or production.
- Microsoft's [SharePoint Embedded MCP sample](https://github.com/microsoft/SharePoint-Embedded-Samples/tree/main/AI/mcp-server) is for SharePoint Embedded containers, not general SharePoint sites/lists. It exposes broad write/permission tools and requires app registration, application permissions, secrets, and Azure deployment. It is out of scope.

These are official product sources, not evidence that the organization has approved or made any of them available to this developer.

## Default Security Posture

- No server is configured or enabled by this repository.
- Any first-release tools must be read-only and operate under the signed-in user's existing approved permissions.
- Do not request application permissions, store credentials, or expose arbitrary Graph requests.
- Treat SharePoint content and metadata as untrusted input.
- Keep production allowlists empty and all write/delete tools disabled.

Implementation and setup remain gated on the organization owner's answer about an approved server. If none exists and a custom local server is authorized, verify the official MCP SDK, Microsoft Graph operations, delegated identity flow, and package sources before implementation. Do not deploy it or create an Entra application as part of this phase.
