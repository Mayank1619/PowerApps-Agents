# Power Query Standard

Status: proposed; validate syntax and refresh behavior in an approved local tool before release.

- Use named, readable transformation steps; assign explicit types and descriptions where appropriate.
- Parameterize sources and environments. Never embed credentials, secrets, tenant IDs, or production endpoints.
- Remove unused columns early where source folding/connector behavior supports it; document operations that may break folding or increase refresh cost.
- Define null, error, duplicate, malformed-value, and missing-field behavior explicitly.
- Document SharePoint list/library pagination; expand lookup and person fields deliberately; normalize choices/managed metadata and attachments only as required.
- Define date/timezone conversion, daylight-saving assumptions, and date-only handling.
- Use reusable functions only when they remove meaningful duplication and are testable.
- Document privacy levels, refresh mode, source dependencies, and privacy/firewall implications.
- Test transformations against synthetic fixtures; do not claim a live refresh unless it was actually run and approved.
