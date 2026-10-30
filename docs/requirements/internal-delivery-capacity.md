# Internal Delivery and Capacity Dashboard

Status: reference requirements proposal; business-owner approval required.

## Objective

Provide a governed view of consultant availability, assignment utilization, skill coverage, client demand, assignment risk, training progress, and data-quality exceptions using conceptual SharePoint-backed data.

## Scope

Conceptual lists: Consultants, Skills, ConsultantSkills, Assignments, ClientDemand, TrainingProgress, Availability. This design does not create these lists or connect to a tenant.

## Personas and Questions

- Executive sponsor: What capacity and open demand are present by time period?
- Delivery manager: Who is available, assigned, or nearing assignment end?
- Skills lead: Which skills have verified coverage and gaps?
- Training coordinator: Which assigned learning items are incomplete?
- Data steward: Which source records need correction?

## Business Rules Requiring Approval

- Define the utilization numerator/denominator and calendar/work-week.
- Define availability treatment for partial weeks, leave, holidays, and future dates.
- Define skill proficiency threshold, recency, and verification owner.
- Define demand statuses that count as open and the coverage allocation rule.
- Define assignment end-warning horizon and whether date is inclusive.
- Define training eligibility, due dates, and completion states.
- Define data-quality checks, severities, and accountable owners.

## Acceptance Examples

- Given no qualifying availability in the selected period, when the available count is calculated, then the result follows an owner-approved blank-versus-zero rule.
- Given an assignment outside the selected date range, when utilization is evaluated, then it is excluded according to the approved overlap rule.
- Given an open demand with no eligible verified skill match, when skill gaps are counted, then it is reported only under the approved proficiency/recency rule.
- Given a training record without a due date, when completion percentage is calculated, then the denominator treatment is explicitly defined and tested.
- Given an orphaned lookup or invalid date range, when data quality is checked, then a synthetic exception is emitted without personal data.

## Clarification Log

No business owner, authoritative metric definitions, privacy classification, retention period, or environment has been supplied. All remain open; no suggested measure name is final.
