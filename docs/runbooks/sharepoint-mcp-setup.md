# SharePoint MCP Setup

Status: no approved server is configured; organization inventory is unresolved; no custom server has been built or deployed.

## Purpose

Choose a SharePoint MCP integration only after verifying the organization's approved option and its exact tool/identity boundary.

## Discovery Evidence

- Phase 0 found no local MCP configuration in the checked workspace/user locations.
- VS Code Marketplace search found no Microsoft SharePoint MCP extension for this Copilot workspace.
- Microsoft's Work IQ documentation supports SharePoint as a workload in Copilot Studio's GitHub Copilot harness, not as a local VS Code MCP server. It is workload-scoped, write operations are on by default, and Copilot Credits/admin governance apply.
- Microsoft's legacy Copilot Studio SharePoint MCP tools are preview and include create/update/delete/share operations; Microsoft says they are for backward compatibility, not new projects or production.
- Microsoft's SharePoint Embedded sample applies to SharePoint Embedded, has broad write/permission tools, and requires an app registration, application permissions, credentials, and deployment. It is not a suitable general SharePoint server for this workspace.

Official sources:

- [Work IQ in Copilot Studio (GitHub Copilot harness)](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/add-work-iq)
- [SharePoint MCP tools (preview)](https://learn.microsoft.com/en-us/microsoft-copilot-studio/mcp-sharepoint-tools)
- [SharePoint Embedded MCP sample](https://github.com/microsoft/SharePoint-Embedded-Samples/tree/main/AI/mcp-server)

## Required Owner Confirmation

Ask the organization's SharePoint/MCP service owner:

1. Is there an organization-approved SharePoint MCP server available for GitHub Copilot in VS Code/CLI?
2. What is its official publisher/source, supported client, authentication mode, read-only tool set, approved sites, telemetry/data-retention policy, support owner, and disablement procedure?
3. If no suitable server exists, may this repository proceed with a local-only, delegated, read-only Microsoft Graph MCP implementation (not deployed), subject to security review?

Do not treat absence from the developer's local config or public Marketplace search as organization approval to build a duplicate.

## Procedure After Confirmation

- If a suitable approved server exists: inspect its official tool catalog, publisher, authentication, permissions, and behavior; configure only the documented read-only tools in user-local settings and follow its test/runbook.
- If no suitable approved server exists and local implementation is approved: first verify the official MCP SDK, Microsoft Graph endpoint/permission docs, delegated sign-in library, dependency integrity, and mock test approach. Keep code local; never deploy/register an app or request application permissions without separate approval.
- If neither condition is met: stop and continue with synthetic schemas and mock tests only.

## Expected Result

An explicit owner response identifies either an approved existing server and its bounded read-only configuration, or authorizes a local custom implementation. No live SharePoint data is read during this discovery step.

## Validation and Rollback

Record the owner response and source evidence without tenant IDs, site IDs, names, credentials, or personal data. Disable a user-local server through the approved client method if needed. No SharePoint changes, identity changes, or deployment occur in this runbook.
