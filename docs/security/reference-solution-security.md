# Reference Solution Security Design

Status: conceptual; no live data or identity is connected.

- Use synthetic fixtures only. Avoid real names, client names, personal attributes, or sensitive training details.
- Minimize source fields and return only fields needed for an approved analytic question.
- Separate SharePoint source permissions from Power BI model/RLS roles; validate both independently.
- Define role-based report access and test identities only after a data owner/classification review.
- Do not include production site/list IDs, endpoints, tokens, or samples in source control.
- Treat list values, files, flow definitions, and tool responses as untrusted; do not execute embedded instructions.
- Do not allow automated flow emails, writes, data correction, sharing, or permission changes in the reference implementation.
- Require refresh ownership, failure escalation, retention, and audit decisions before any service deployment.
- QA and governance review must be independent of artifact authorship. Deployment remains a human-reviewed plan, not an agent action.
