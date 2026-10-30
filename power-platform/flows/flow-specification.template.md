# Flow Specification

Status: draft; complete and review before any implementation.

## Identity

- Flow name:
- Purpose and business outcome:
- Business owner:
- Technical owner/support contact:
- Target environment category (development/test; never guessed):
- Requirement references and acceptance criteria:

## Trigger and Contract

- Trigger type and event:
- Trigger conditions:
- Concurrency behavior and limits:
- Input schema, required fields, sensitivity:
- Output schema and completion semantics:

## Processing

| Step | Action/connector | Inputs and outputs | Condition/branch | Idempotency |
| --- | --- | --- | --- | --- |
| 1 |  |  |  |  |

## Connections and Configuration

- Approved connectors:
- Connection references:
- Environment variables (names only; no secret values):
- Source/destination mappings:
- Required user permissions and least-privilege rationale:

## Reliability and Operations

- Error scopes and termination paths:
- Retry policy and retryable errors:
- Timeout behavior:
- Monitoring/alerts and sanitized diagnostics:
- Runbook and operational owner:
- Retention/data-classification considerations:

## Security and Governance

- Personal/confidential data:
- DLP/connector review:
- Secrets handling (never embed credentials):
- Threats and mitigations:
- Human approval gates:
- Explicitly forbidden actions:

## Tests and Release

- Synthetic test cases (positive/negative/blank/boundary/error):
- Mock/contract tests:
- Development validation evidence:
- Dependencies and deployment order:
- Approval record:
- Rollback procedure and verification:

No live flow may be created, updated, enabled, published, deleted, run, cancelled, or resubmitted without explicit operation-specific approval.
