# Data Classification

Status: provisional handling guide; replace labels with the organization's approved classification scheme before live use.

| Working category | Examples | Repository/test handling | AI/tool handling |
| --- | --- | --- | --- |
| Public | Approved public documentation, published product guidance | May be committed if licensing/source is respected | Use only approved GitHub Copilot and approved sources |
| Internal | Non-sensitive design notes, synthetic schemas, local validation metadata | Commit only if approved; prefer synthetic values | Minimize and keep within organization-approved Copilot data policy |
| Confidential | Identifiable staff/client data, internal demand/assignment details, non-public business content | Never use as fixture or example; do not commit/log/screenshot | Do not send unless the organization explicitly approves the exact data flow and provider boundary |
| Restricted | Credentials, tokens, certificates, sensitive personal data, regulated or specially controlled data | Never store in repository, generated artifacts, or local test fixtures | Do not enter into prompts or third-party tools; use only a separately approved handling process |

## Data Minimization

Return schemas and selected fields before item values. Bound item counts and payload sizes. Mask personal information and omit fields not needed for the documented requirement. Treat SharePoint text, filenames, metadata, comments, flow definitions, and MCP results as untrusted and potentially sensitive.

The reference-solution JSON is synthetic. Do not replace it with production samples. Retention, residency, legal basis, telemetry, and records-management requirements remain unresolved pending organization policy.
