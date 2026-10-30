# Administrator Requests

## Phase 0

No administrator request is currently justified by the local read-only assessment. No tenant settings, application registrations, permissions, service principals, credentials, or live resources were changed or requested.

## Potential Requests, Not Yet Approved

These are conditional items only. Do not perform them unless a later verified integration requires them and the organization approves the exact scope.

| Request | Why it may be needed | Minimum scope | Validation |
| --- | --- | --- | --- |
| Power BI MCP tenant setting | Only if the verified Microsoft-supported authoring/MCP tooling explicitly requires it | The specific tenant setting and intended development audience; no broader tenant changes | Confirm the setting through the approved admin interface and then run a harmless read-only MCP validation |
| Microsoft Graph delegated access | Only if an approved SharePoint MCP integration requires Graph access beyond the signed-in user's existing grants | Exact documented delegated scopes; no application permissions by default | Verify consent and read-only access against an explicitly approved development site |
| Application registration or application permissions | Not requested for the initial local developer workflow | None; deferred unless explicitly approved | Security review, permission review, ownership, expiry/rotation, and audit evidence before use |
| Power Platform environment access | Only if the developer lacks access to a specifically approved development environment | Minimum existing role needed to inspect authorized resources; no production role | Confirm environment identity through the approved CLI/UI and perform read-only listing |

The organization must identify the appropriate tenant, Fabric, Power Platform, SharePoint, Azure, or Entra administrator. This assessment does not infer that the user has any such role.

## Current Developer/Owner Actions

| Action | Why | Minimum access/action | Success validation |
| --- | --- | --- | --- |
| Organization MCP owner: confirm whether an approved SharePoint MCP exists for GitHub Copilot in VS Code/CLI | Local config and Marketplace discovery do not reveal private/centrally managed servers; custom server work is gated on this answer | No admin permission change; provide official server source, client, read-only tool inventory, authentication, and owner | Written owner confirmation and documentation for a suitable approved server, or explicit confirmation that none is available and local-only custom development may proceed |
| Developer: resolve GitHub Copilot extension/CLI availability | Local CLI listings do not show Copilot Chat; `copilot` is a VS Code shim | Organization-approved local installation/profile access; no tenant admin permission presumed | Local CLI/extension version/help is usable in the active profile; Marketplace publisher and policy verified |
| Repository owner: confirm GitHub host/visibility and action policy | Dependency Review for private repositories requires GitHub Advanced Security; action allowlisting and settings are unknown | Repository owner/admin review of repository settings and action allowlist | Confirmed visibility, allowed actions/runner, dependency-review entitlement, and required status checks |
| Repository owner: protect any future deployment environment | Inert deployment template has no actual approval environment | Named reviewer(s), protected environment, and change-management record; no deployment run requested | Protection appears in repository settings and a dry review confirms the approval gate without deploying |

No administrator setting or permission change is requested at this time. The items above are discovery/conditional owner actions, not authorization to modify a tenant or live resource.
