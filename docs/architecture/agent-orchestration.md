# Agent Orchestration

Status: proposed workflow; installed agent schema and delegation support remain unverified.

## Flow

```mermaid
sequenceDiagram
  actor D as Developer
  participant C as Copilot interface
  participant R as Requirements analyst
  participant A as Solution architect
  participant S as Domain specialist
  participant Q as QA and governance reviewer
  participant G as Git repository
  D->>C: Provide request and target constraints
  C->>R: Clarify scope and acceptance criteria
  R-->>C: Requirements, assumptions, open questions
  C->>A: Prepare design and dependency plan
  A->>S: Request bounded domain analysis
  S-->>A: Proposal, tests, risks, and dependencies
  A-->>C: Integrated implementation proposal
  C->>G: Propose local artifact changes
  G-->>Q: Changed files and evidence
  Q-->>C: Findings, failures, residual risks
  C-->>D: Validation results and approval gates
  D->>C: Accept, revise, or stop
```

## Rules

- Requirements and target environment are clarified before authoring.
- Specialist work is bounded to a domain and cannot widen permissions or target environments.
- The authoring agent and independent QA reviewer are separate roles; generated work is never self-approved.
- Validation is performed locally with synthetic or mocked data when possible.
- Any live service access requires a previously approved tool and target. Any external write pauses for operation-specific human approval.
- The deployment reviewer may prepare a runbook but must not execute it.

## Failure Handling

Missing requirements, an unavailable tool, ambiguous identity, or an unknown target results in a stop-and-clarify outcome, not a guessed value or fallback to production.
