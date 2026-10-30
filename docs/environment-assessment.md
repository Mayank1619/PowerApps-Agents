# Environment Assessment

Assessment date: 2026-10-29
Scope: Phase 0, local read-only discovery

## Summary

The workspace is empty and is not currently a Git repository. Windows, Git, GitHub CLI, VS Code Insiders, Node.js, npm, and Python are available. GitHub CLI reports an authenticated session; account details were not displayed. GitHub Copilot CLI, the VS Code Copilot extension, .NET, Azure CLI, Power Platform CLI, and Power BI Desktop are not verified as usable. No local MCP server configuration was detected.

## Inventory

| Area | Result | Classification |
| --- | --- | --- |
| Operating system | Windows, `Microsoft Windows 10.0.26300` | Available |
| Git | 2.46.0.windows.1 | Available |
| GitHub CLI | 2.93.0; authenticated status confirmed without displaying account data | Available |
| GitHub Copilot CLI | Not detected. The `copilot` command resolves to the VS Code Insiders internal `copilot-shim\\copilot.exe`; its version/help checks returned no usable output | Missing; requires developer action |
| VS Code Insiders | 1.144.0-insider | Available |
| GitHub Copilot VS Code extension | Not listed by either the Insiders or Stable VS Code CLI; Marketplace discovery separately marked GitHub Copilot Chat installed, so the discrepancy remains unresolved | Requires developer action |
| Node.js | v20.16.0 | Available |
| npm | 10.8.2 | Available |
| Python | 3.14.2 | Available |
| .NET SDK | `dotnet` command not found | Missing; optional until a verified component requires it |
| Azure CLI | `az` command not found; Azure account authentication therefore not assessable | Missing; optional for the first local-only phase |
| Power Platform CLI | `pac` command not found | Missing; required only for its documented CLI workflows |
| Power BI Desktop | Not found at common executable paths; no Power BI app package found | Missing; required for Desktop authoring and local PBIP validation |
| Power BI project format support | Not verified because Power BI Desktop and a Power BI project are absent | Requires developer action |
| Locally configured MCP servers | No MCP config file found at the checked user/workspace paths; checked Insiders `settings.json` had no detected MCP server map | Not detected; verify again when repository configuration exists |
| Copilot plugins and skills | No locally listed Copilot extension or `gh` Copilot extension was found. The local `.copilot` directory contains state/config filenames but no plugin or skill inventory was established | Not detected / unverified |
| Repository status | Current directory is not a Git repository; no project files or test manifests were present | Requires developer action in Phase 1 |
| Test frameworks | None configured or discoverable in this empty workspace | Requires developer action in Phase 1 |

## Environment Variable Review

Process environment variable names were enumerated; values were not printed. Relevant names present include `AI_AGENT`, `COPILOT_AGENT`, `GIT_ASKPASS`, `OneDrive`, and `VSCODE_GIT_ASKPASS_*`. No variable values, tokens, or credentials were recorded. Environment-variable names are machine-specific and this inventory is not a configuration recommendation.

## Authentication and Identity

- GitHub CLI: authenticated status only; identity, scopes, and tokens were not displayed.
- Azure CLI: unavailable, so signed-in account status could not be checked.
- Power Platform CLI: unavailable, so environment access could not be checked.
- Microsoft Graph, SharePoint, Power BI, and Fabric identities or permissions were not probed.

## Scope and Limitations

All checks were local and read-only. No package was installed, no command authenticated a new session, and no tenant or external service was modified. Executable search covered common Power BI Desktop paths and the installed app package; absence is not proof that no copy exists elsewhere. The resolved `copilot` command is a VS Code Insiders internal shim, not GitHub Copilot CLI. Organization-approved plugins, skills, MCP servers, tenant settings, and permissions require an authoritative local inventory or administrator confirmation.
