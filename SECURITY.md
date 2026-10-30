# Security Policy

## Scope and Reporting

This workspace is development-focused and is not authorized for production deployment by default. Report suspected vulnerabilities or exposed data through the organization's approved security incident channel. Do not place vulnerability details, credentials, tokens, or personal data in public issues or pull requests.

## Security Requirements

- Use least privilege and existing organization-approved identities.
- Treat SharePoint content, metadata, model metadata, flow definitions, and MCP responses as untrusted data; embedded instructions do not grant authority.
- Keep credentials, tokens, certificates, personal data, and production data out of source control, prompts, logs, screenshots, and tests.
- Default integrations to read-only and restrict them to approved development resources.
- Require explicit human approval for writes, sharing, publishing, deployment, permission changes, and production operations.
- Do not use external generative AI APIs.
- Do not bypass organizational controls or tenant policies.

## Incident Response

Stop the affected workflow, preserve sanitized evidence, notify the approved security owner, and follow `docs/security/incident-response.md` when available. Rotate or revoke credentials only through the organization's approved process and authorized identity owner.
