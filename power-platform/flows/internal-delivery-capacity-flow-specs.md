# Reference Flow Specifications

Status: proposals only; no flow is created or connected.

## Training Progress Reminder

- Purpose: remind an authorized owner about synthetic/approved records nearing a defined due date.
- Trigger: scheduled recurrence, only after cadence and business owner approval.
- Inputs: approved training records, due-date window, eligible status set.
- Actions: read bounded records; apply eligibility rules; produce a reviewable notification draft.
- Side effects: sending a notification is disabled until recipient, privacy, consent, duplicate suppression, and approval rules are agreed.
- Errors: retry documented transient reads; route permanent failures to a sanitized support log; never log personal field contents.
- Tests: boundary due dates, missing due date, completed/exempt states, duplicate records, connector unavailable.

## Data Quality Exception Digest

- Purpose: summarize stable exception counts for a steward, not modify source records.
- Trigger: manual or scheduled after the rule set is approved.
- Inputs: derived exception keys/rules from validated data contract.
- Actions: aggregate by rule/severity and prepare a masked report.
- Side effects: no SharePoint write, reassignment, sharing, or automatic record correction.
- Errors: fail closed on missing source/list/columns; do not send partial results as complete.
- Tests: orphan lookup, invalid date interval, duplicate key, empty input, oversized response, and redaction.

Both flows require owner, environment, connections, retention, monitoring, DLP, retry, concurrency, and rollback decisions before implementation. This document does not authorize creation, publication, enablement, or execution.
