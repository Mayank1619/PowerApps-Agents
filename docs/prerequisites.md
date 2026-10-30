# Prerequisites

This list reflects the Phase 0 assessment on 2026-10-29. It does not authorize installation or access changes.

| Prerequisite | Status | Classification | Notes |
| --- | --- | --- | --- |
| Windows workstation | Available | Available | Windows version reported as `Microsoft Windows 10.0.26300`. |
| Git | Available | Available | Version 2.46.0.windows.1. |
| GitHub CLI | Available | Available | Version 2.93.0; authenticated status confirmed without revealing account details. |
| VS Code Insiders | Available | Available | Version 1.144.0-insider. |
| GitHub Copilot VS Code extension | Not listed in either checked local profile | Requires developer action | Marketplace discovery produced a conflicting installed marker. Verify in the active VS Code profile; check the organization-approved extension source and policy before installation. |
| GitHub Copilot CLI | Missing | Requires developer action | The `copilot` command resolves to the VS Code Insiders internal shim, not a verified Copilot CLI; GitHub CLI reports no Copilot extension. |
| Node.js and npm | Available | Available | Node.js v20.16.0, npm 10.8.2. |
| Python | Available | Available | Python 3.14.2. |
| .NET SDK | Missing | Optional | Reassess if a Microsoft-supported component or test requires it. |
| Azure CLI | Missing | Optional | No Azure authentication state could be assessed. Do not install or sign in without an approved need. |
| Power Platform CLI | Missing | Requires developer action | Needed only for planned CLI operations; verify official installation instructions before use. |
| Power BI Desktop | Missing at checked locations | Requires developer action | Needed for local report/model authoring and actual PBIP validation. Confirm organization licensing and approved installation source. |
| Power BI PBIP capability | Unverified | Requires developer action | Verify in an approved Desktop installation before claiming support. |
| Approved Power BI/Power Platform tooling | Not inventoried | Requires developer action / possibly administrator action | Confirm official plugin metadata and organization approval before enabling. |
| Approved SharePoint MCP server | Not detected locally | Requires developer action | Local absence does not establish that the organization has no approved server. Ask the designated owner before considering a custom server. |
| Git repository | Not initialized | Requires developer action | Phase 1 will create source-controlled structure; no existing changes are present to preserve. |
| Test framework | None configured | Requires developer action | Select a framework after implementation language and package constraints are verified. |

## Installation Gate

No software was installed during Phase 0. Before any installation, verify the official publisher/source, package identity, version, license, and organization policy. Administrator action is not currently established as necessary; do not assume elevated access.
