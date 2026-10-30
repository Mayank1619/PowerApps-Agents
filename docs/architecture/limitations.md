# Architecture Limitations

Status: known constraints at initial setup.

- Phase 0 did not detect a GitHub Copilot VS Code extension, an operational Copilot CLI, Power BI Desktop, Power Platform CLI, Azure CLI, or .NET SDK. Availability and compatibility must be rechecked before choosing an implementation path.
- The local environment check cannot determine organization approval, tenant settings, server-side plugin availability, Graph consent, Fabric capacity, or user permissions.
- Local absence of MCP configuration does not prove that no organization-approved SharePoint MCP server exists.
- PBIP/PBIR support and command/package formats are unverified. No format compatibility is claimed.
- No live resource was accessed. All architecture diagrams are target-state proposals, not evidence that an integration works.
- Local tests cannot prove a production deployment is safe. Service-specific validation and human approvals remain necessary.
- No automatic deployment, permission change, sharing, production write, deletion, or tenant configuration is supported by this initial scaffold.

## Error Handling and Rollback

```mermaid
flowchart TD
  Start[Local task or approved read-only call] --> Check{Input and target valid?}
  Check -->|no| Stop[Fail closed; explain missing evidence]
  Check -->|yes| Run[Run bounded operation]
  Run --> Result{Success and response valid?}
  Result -->|no| Sanitize[Redact sensitive values; retain safe error code and correlation ID]
  Sanitize --> Diagnose[Diagnose once from available evidence]
  Diagnose --> Retry{Safe transient retry documented?}
  Retry -->|yes| Run
  Retry -->|no| Stop
  Result -->|yes| Review[Record local result and validate]
  Review --> Human{Human approval required for next action?}
  Human -->|yes, absent| Pause[Pause; do not write or publish]
  Human -->|yes, granted| Controlled[Use separately authorized procedure]
  Human -->|no| Complete[Complete local task]
  Controlled --> Verify{Post-action check passes?}
  Verify -->|yes| Complete
  Verify -->|no| Rollback[Follow approved rollback plan; record outcome]
  Rollback --> Stop
```

Rollback is a plan, not an autonomous permission to make another write. A failed operation pauses for human direction unless a pre-approved, safe recovery procedure explicitly covers it.
