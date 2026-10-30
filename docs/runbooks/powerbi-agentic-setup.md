# Power BI Agentic Setup

Status: verified product discovery; installation and activation not performed.

## Purpose

Assess the official Power BI Authoring MCP option for a future, explicitly approved local development workflow.

## Verified Source

- VS Code Marketplace entry: [Power BI Authoring MCP Server](https://marketplace.visualstudio.com/items?itemName=analysis-services.powerbi-modeling-mcp), extension ID `analysis-services.powerbi-modeling-mcp`, publisher Microsoft.
- Source repository: [microsoft/powerbi-modeling-mcp](https://github.com/microsoft/powerbi-modeling-mcp).
- Microsoft's repository describes support for Power BI Desktop, Fabric semantic models, and PBIP/TMDL model projects. The local environment does not have Power BI Desktop, so local project validation is not yet possible.
- Marketplace discovery reports this MCP extension as not installed. Neither the Insiders nor Stable VS Code CLI lists GitHub Copilot Chat or the Power BI MCP extension, although Marketplace discovery marked Copilot Chat installed; local installation is therefore not confirmed.

## Security and Compatibility Findings

- The documented tool surface can create, update, delete, publish/deploy, refresh, query, and change semantic-model security. Write operations are enabled by default in the documented server mode. Treat the server as write-capable; do not register or start it without an explicitly reviewed read-only configuration.
- The documented `--readonly` mode prevents model write operations. Do not assume it blocks all data reads or query results. Exact VS Code configuration has not been applied or validated here.
- The server requires EULA acceptance before use. No EULA was accepted in this workspace.
- The official documentation says there is no tenant admin setting specifically blocking the local server. Service access follows XMLA connectivity and the user's existing Power BI/Fabric permissions; users need appropriate model permissions for operations. Do not request elevated permissions for initial discovery.
- If MCP tools do not appear in GitHub Copilot for an enterprise account, the repo says an administrator may need to enable the GitHub Copilot setting named “MCP servers in Copilot.” Do not ask for this change unless that exact failure occurs and the organization approves the risk.
- Microsoft documentation discloses telemetry/data collection and warns that metadata, schemas, and query results returned to the MCP client may be included in the configured model-provider conversation context. Use only GitHub Copilot under organizational approval; never configure another provider or external model API. Confirm the organization's Copilot data-handling policy before accessing sensitive models.
- The server can perform destructive changes. A client confirmation prompt is not a substitute for server-side permissions, independent review, a backup, or explicit approval.

## Prerequisites

- Organization-approved GitHub Copilot in VS Code and the approved Microsoft extension source.
- Developer confirmation that the extension and its EULA/telemetry are acceptable under organizational policy.
- A local Power BI Desktop model or an explicitly approved development model/project; exact target and permissions must be known.
- Read-only mode and a reviewed, user-specific MCP configuration. Do not commit active user configuration.

## Procedure

1. Verify the extension ID and Microsoft publisher in the official Marketplace page above.
2. Review the current [official repository README](https://github.com/microsoft/powerbi-modeling-mcp/blob/main/README.md), EULA, available tools, data/privacy disclosures, and troubleshooting guide.
3. Confirm Copilot is configured only with the organization's approved GitHub Copilot service; do not select another provider.
4. Obtain organization approval before installing/enabling the MCP extension. Do not use the CLI marketplace path: the local `copilot` command's version/help is unusable and its supported workflow could not be verified.
5. Configure a user-local client entry only after the installed extension's own documentation is checked. Require the documented read-only mode; do not copy credentials or identifiers into the repository.
6. Start with no external model connection, or with a synthetic local model if one is available. Discover the tool list and verify writes are unavailable before connecting to any non-disposable model.
7. Record extension version, configuration, approved identity/target category, checks, and sanitized results without secrets or model data.

## Expected Result

An approved local MCP server is discoverable in Copilot, its effective mode is read-only, and only a harmless schema inspection or DAX query against a specifically approved non-production model is performed. No model change is made.

## Validation

Use the local checker at `scripts/validate/validate-powerbi-tools.ps1` to inventory availability only. Validate MCP startup and tool discovery only after installation and approval; this workspace has not done so. A DAX query may reveal data and is not authorized by merely being read-only.

## Common Failures

- Extension is absent from the active VS Code profile: resolve the profile discrepancy before setup.
- MCP tools are not listed: verify supported Copilot version and, only if applicable, the enterprise “MCP servers in Copilot” policy with the organization owner.
- No model connection: verify the explicitly selected local development model and existing identity access; do not guess workspace names or request broad permissions.
- Read-only setting is unclear: stop; do not start a default write-capable server.
- EULA or telemetry policy is unresolved: stop before acceptance or data access.

## Safe Rollback

Disable/unregister the MCP server through the approved client procedure. Do not delete models, alter XMLA settings, revoke user permissions, or change tenant configuration as rollback.

## Escalation

Ask the organization Copilot owner about MCP policy and the Power BI/Fabric owner about model access. Escalate data-handling or telemetry concerns to the organization's security/privacy owner. No administrator action is requested at this time.
