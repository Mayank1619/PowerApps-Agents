# Power Platform CLI Setup

Status: official installation/command documentation verified; CLI not installed and no authentication performed.

## Purpose

Explain approved PAC CLI discovery and future read-only use without assuming an installer, identity, environment, or administrator role.

## Verified Sources

- [Install and configure Power Platform CLI](https://learn.microsoft.com/en-us/power-platform/developer/cli/introduction)
- [PAC CLI command reference](https://learn.microsoft.com/en-us/power-platform/developer/cli/reference/)
- [PAC auth reference](https://learn.microsoft.com/en-us/power-platform/developer/cli/reference/auth)
- [PAC environment reference](https://learn.microsoft.com/en-us/power-platform/developer/cli/reference/env)
- [PAC Power Automate reference](https://learn.microsoft.com/en-us/power-platform/developer/cli/reference/power-automate)

Microsoft documents installation through its VS Code extension, .NET tool, or Windows MSI. The local environment has neither PAC CLI nor .NET; no installer was run.

## Prerequisites

- Developer confirms an organization-approved installation method and version.
- For authenticated commands, use an existing approved identity and an explicitly selected development environment. `pac auth create` creates a local authentication profile; it is not part of this read-only inventory and must not be run without explicit developer authorization.
- Do not use service-principal flags, store secrets, create application registrations, or select a default/production environment by guesswork.

## Procedure

1. Check local command availability with `Get-Command pac` in PowerShell; the official Microsoft guide uses this to verify installation.
2. If not installed, obtain approval and follow the current official Microsoft installation instructions. Do not use third-party package sources.
3. Before an authenticated command, inspect the installed `pac help` output and command-specific Microsoft reference. Do not print or save access tokens.
4. If separately authorized to inspect existing authentication profiles, note that `pac auth list` returns profile names, environment URLs, and user names. Keep the output in the terminal; do not log or commit it. Never call `pac auth token` because it displays an access token.
5. `pac env list` is documented as listing Dataverse environments from Global Discovery Service. It requires an authorized identity and can reveal environment metadata; run only after an exact scope and data-handling approval.
6. `pac power-automate list-cloud-flows` is a **Preview** command in the Power Automate command group, which Microsoft describes as inspecting flows “as an admin.” Verify exact permissions and preview acceptance before use; no admin access is assumed.
7. Any environment selection or auth-profile mutation is a separate operation. Recheck the selected target before listing resources.

## Expected Result

PAC CLI is found at an approved path and its installed help/version can be verified. Authenticated inspection, if separately approved, is limited to the named development environment and reports only sanitized metadata.

## Current Result

`pac`, `az`, and `dotnet` were not found in Phase 0. No PAC login, auth profile, environment listing, or flow inspection was attempted.

## Validation, Failures, and Rollback

Run `scripts/validate/validate-power-platform-cli.ps1` for a local availability check. Do not repeat failed authentication unchanged. Uninstall/reinstall only through the approved official procedure; do not delete auth profiles or caches as a troubleshooting shortcut. Escalate missing environment permission to its owner with the exact required read scope.
