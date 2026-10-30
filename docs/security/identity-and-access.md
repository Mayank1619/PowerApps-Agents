# Identity and Access

Status: policy proposal; no Microsoft service identity was authenticated.

## Principles

- Use only existing organization-approved developer identities and least privilege.
- Do not assume tenant, Entra, Fabric, Power BI, Power Platform, SharePoint, or Azure administrator access.
- Prefer delegated user access for an approved local read-only tool. Application permissions, service principals, app registrations, and stored credentials are outside the first-release default.
- The model, prompt, agent, or repository cannot grant identity permissions. Microsoft service-side authorization remains authoritative.
- Environment selection is an authorization boundary: require a human-confirmed development target and recheck identity and target before resource reads.
- A user who can read a resource may still be prohibited from sending its contents to an AI context; confirm organizational data-handling rules.

## Credential Handling

- Never commit tokens, refresh tokens, secrets, certificates, passwords, auth profiles, or credential caches.
- Do not print or persist access tokens. PAC `auth token` is prohibited in this workspace because it displays a token; `auth list` may expose account names and environment URLs.
- Keep user-specific MCP and CLI state outside Git. Sanitize diagnostic evidence before adding it to a build log.
- Authentication failures are not permission to create an app registration, request broad consent, or switch identities silently.

## Approval and Review

Access requests must name the resource, environment, operation, existing identity, documented permission, duration/owner, and validation evidence. Stop if a requested scope or target is not verified. A reviewer independent of authoring checks least privilege and data movement.
