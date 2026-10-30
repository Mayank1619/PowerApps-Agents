# Power Query Instructions (Draft)

Verify the installed, organization-approved Copilot client supports this instruction-file format before relying on automatic application.

- Use named steps, explicit types, source parameters, and remove unused columns early.
- Do not embed credentials. Document null/error handling, privacy levels, refresh assumptions, and potentially expensive operations.
- Document SharePoint person/lookup expansion, choice normalization, attachments, and date/time-zone conversion explicitly.
- Validate transformations with synthetic fixtures; do not claim a refresh was executed when it was not.
