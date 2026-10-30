# Known Limitations

Status as of 2026-10-29.

- GitHub Copilot CLI is not installed/verified. The `copilot` command resolves to a VS Code Insiders internal shim. Copilot extension presence differs between Marketplace discovery and local profile listings; neither checked local profile lists it.
- Copilot agent/instruction/prompt files are drafts; installed client schema/loading behavior is unverified and no tools are granted.
- Power BI Desktop, Power Platform CLI, Azure CLI, and .NET SDK were not found. PBIP/PBIR capability is unverified.
- Official Power BI Authoring MCP is Marketplace-verified but not installed; it can write/delete model objects, defaults to read-write in its documented mode, and may forward model metadata/query results through the configured Copilot context. Policy, EULA, telemetry, and read-only setup need review.
- Official Power Automate FlowAgent source is verified, but the plugin is not installed. It exposes broad flow/connection operations and default telemetry; no technically constrained read-only profile is verified.
- No organization-approved SharePoint MCP is configured locally. Public docs include Work IQ in Copilot Studio, preview legacy tools, and a SharePoint Embedded sample; none is a verified approved drop-in for this VS Code workspace.
- Custom SharePoint MCP implementation is paused until the organization MCP owner confirms no suitable approved server exists and authorizes local-only development.
- The PowerShell execution policy blocked runtime validation scripts. Do not bypass; use an organization-approved execution method if needed.
- GitHub Actions workflows are static templates only. Runner execution, repository visibility, GHAS entitlement, action allowlisting, Dependabot alerts, branch protection, and environment reviewers are unverified.
- `npm run security` is a local high-confidence pattern scan, not a substitute for GitHub secret scanning or a full credential scanner.
- DAX, Power Query M, accessibility, Power BI rendering, flow runtime, and live service behavior are not validated by the Node tests.
- No deployment readiness is claimed. No environment IDs, permissions, connections, production data, or administrator access are assumed.
