# Power Automate Agent Setup

Status: official Microsoft plugin/FlowAgent verified from source; not installed or configured.

## Purpose

Describe a future GitHub Copilot CLI setup for Power Automate while preserving the local-only, read-only validation boundary.

## Verified Sources

- Official Microsoft repository: [microsoft/power-platform-skills](https://github.com/microsoft/power-platform-skills), MIT licensed.
- Official plugin: [Power Automate plugin](https://github.com/microsoft/power-platform-skills/tree/main/plugins/power-automate).
- Official FlowAgent setup skill: [setup/SKILL.md](https://github.com/microsoft/power-platform-skills/blob/main/plugins/power-automate/skills/setup/SKILL.md).
- Official flow-builder skill: [build-flow/SKILL.md](https://github.com/microsoft/power-platform-skills/blob/main/plugins/power-automate/skills/build-flow/SKILL.md).

The repository documents a bundled FlowAgent MCP server requiring Node.js 18+ and Azure CLI authentication. Its manual Copilot CLI workflow uses `/plugin marketplace add microsoft/power-platform-skills` followed by `/plugin install power-automate@power-platform-skills`. These commands were verified in the official repository but not executed because GitHub Copilot CLI is not installed/verified here.

## Security Review Before Installation

- The plugin exposes a broad tool set including environment/flow discovery, create/update/edit/copy, publish/disable/delete/run/resubmit/cancel, connection lifecycle, and diagnostics. Do not equate role instructions with a technical read-only boundary.
- No verified host configuration was found that safely removes every write-capable tool. Until such gating is verified, do not install/connect it to a live environment.
- Official repository documentation says Power Automate telemetry is enabled by default and records selected identity metadata, invocation outcome, duration, and failure class/code. Review the current telemetry guide and organizational policy before enabling.
- FlowAgent uses Azure CLI and an MSAL connection cache. Do not create a new login/profile, request app registration, or expose tokens as part of this runbook.
- The official `setup` and `build-flow` skills have broad tools and can create flows. Do not run these skills for initial read-only validation.

## Prerequisites

- Organization-approved GitHub Copilot CLI, with its exact version/help verified locally.
- Node.js 18 or newer, Azure CLI from an official Microsoft source, and organization approval for the plugin, telemetry, host, and MCP tool surface.
- An existing approved identity and explicitly named development environment. Never guess environment, cloud, resource, or audience values.

## Procedure

1. Review the current official README, plugin manifest, FlowAgent `.mcp.json`, setup skill, telemetry guide, permissions, endpoints, and tool inventory.
2. Verify supported marketplace commands using the installed Copilot CLI help and current official plugin metadata.
3. Confirm the organization approves the exact plugin version, telemetry behavior, account flow, and tool restrictions. If write tools cannot be technically excluded for the validation session, stop.
4. Only after separate authorization, install the Power Automate plugin using the verified GitHub Copilot CLI workflow. Do not use the quick installer: official docs say it can install PAC CLI and multiple plugins with auto-update.
5. Configure the approved local tool profile outside the repository. Do not register FlowAgent in a committed config or write credentials to source.
6. Confirm the effective identity and selected development target without printing tokens. Never use an ambiguous/default environment.
7. For read-only validation, use only independently verified list/get tools. Do not call create/edit/publish/disable/delete/run/resubmit/cancel or connection-mutating tools.

## Expected Result

The plugin is installed only in the approved local Copilot CLI profile; FlowAgent tools are discoverable; the effective target is a named development environment; only approved read-only tools are available to the validation session; no live flow changes.

## Current Result

Not met: GitHub Copilot CLI is missing (the `copilot` command is a VS Code shim), Azure CLI and PAC CLI are missing, and no Power Automate plugin/FlowAgent server is configured. No login or live inspection was attempted.

## Validation and Troubleshooting

Run `scripts/validate/validate-power-automate-tools.ps1` for local availability only. It does not authenticate, install, or start MCP. If tools are missing, stop and follow approved installation documentation. If account, cloud, endpoint, tenant, or environment selection is unclear, stop and consult the environment owner.

## Safe Rollback and Escalation

Disable/unregister a local MCP server using the approved client procedure. Do not delete flows, reset tokens, revoke permissions, or change tenant settings as rollback. Escalate tool-scope, identity, telemetry, or data-handling concerns to the organization's Power Platform, Copilot, and security owners.
