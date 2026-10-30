# Deployment Architecture

Status: proposed promotion model; no deployment pipeline or environment is configured.

## Promotion Flow

```mermaid
flowchart LR
  Source[Reviewed Git commit and tests] --> Package[Validated versioned artifact]
  Package --> Dev[Isolated development environment]
  Dev --> DevTest[Development smoke and security tests]
  DevTest --> Gate1{Named human approval}
  Gate1 -->|approved| Test[Test environment]
  Gate1 -->|rejected| Hold[Stop and remediate]
  Test --> TestEvidence[Acceptance and regression evidence]
  TestEvidence --> Gate2{Independent QA and release approval}
  Gate2 -->|approved| ProdGate{Explicit production approval}
  Gate2 -->|rejected| Hold
  ProdGate -->|separately authorized| Prod[Production]
  ProdGate -->|not approved| Hold
  Prod --> Verify[Post-deployment smoke checks]
  Verify -->|failure| Rollback[Documented rollback decision]
  Verify -->|pass| Record[Audit record and release notes]
```

## Controls

- Promotion is an independently authorized process, not an agent action.
- Source and destination are named explicitly; production is never selected by default.
- Artifacts are versioned, validated, and reviewed. Environment IDs and connection values are supplied through approved secure configuration, not committed examples.
- Connection references, environment variables, workspace/site mappings, dependencies, and rollback behavior are checked before any approved release.
- The initial release has no active deployment workflow. Any workflow template must be disabled by default and require protected environment approval and an explicit artifact version.
- Import/export, publish, replacement, and post-deployment writes remain gated pending a separate explicit instruction.
