# Provisional Measure Definition Sheet

Status: examples for requirements review only; names and definitions are not approved business metrics.

Every measure needs an accountable business owner and acceptance examples. Values below are definitions to resolve, not implementation claims.

| Measure | Numerator | Denominator | Filters/exclusions | Blank behavior/date context | Owner | Acceptance example |
| --- | --- | --- | --- | --- | --- | --- |
| Available Consultant Count | Distinct active consultant keys with confirmed availability in selected period | N/A | Exclude inactive consultants; decide whether any active assignment disqualifies availability | Period overlap rule required; return zero or blank when no qualifying rows per owner choice | TBD | Two active consultants with confirmed matching intervals yield 2 before assignment exclusions |
| Assigned Consultant Count | Distinct consultants with qualifying assignment overlap | N/A | Define active/planned statuses and positive-allocation threshold | Selected date determines interval overlap | TBD | One active assignment and one planned assignment test approved status inclusion |
| Utilization Percentage | Sum of assigned capacity units for qualifying period | Sum of available capacity units for same period | Define allocation scaling, leave/holiday treatment, and cap/over-allocation behavior | Safe divide; blank/zero denominator rule; selected calendar period | TBD | 10 assigned hours / 20 available hours equals 50% under a two-hour-unit fixture |
| Open Demand Count | Distinct demand keys in approved open statuses | N/A | Exclude cancelled/filled statuses only after vocabulary approval | Demand interval overlaps selected date range; no rows follows zero/blank rule | TBD | Two synthetic `Open` records count as 2 only if `Open` is approved |
| Demand Coverage Percentage | Approved covered demand quantity | Approved required demand quantity | Define coverage linkage and eligible-skill/proficiency rules; prevent double-counting | Safe divide; selected demand period; no demand follows owner blank rule | TBD | A 0.5-FTE demand with 0.25 approved coverage yields 50% |
| Skill Gap Count | Distinct open demand keys without an eligible verified skill match | N/A | Define proficiency threshold, verification recency, region, and availability | Selected demand period; unresolved skill rules block production definition | TBD | An open demand with no qualifying synthetic skill record is one gap |
| Assignment Ending Soon Count | Distinct qualifying assignment keys ending within warning horizon | N/A | Define status, inclusive boundaries, and horizon length | Anchor to selected/as-of date; blank end date excluded or flagged | TBD | An active assignment ending exactly at horizon boundary follows approved inclusivity |
| Training Completion Percentage | Eligible completed consultant-course records | Eligible consultant-course records | Define eligibility, duplicate attempts, exemptions, and state mapping | Safe divide; completion/due date context; unresolved due-date rule blocks release | TBD | One completed and one in-progress eligible synthetic record yields 50% |
| Data Quality Exception Count | Count of distinct exception keys emitted by approved checks | N/A | Define severity and whether suppressed/acknowledged exceptions count | Selected as-of/load date; empty exception table returns zero | TBD | One orphan lookup in synthetic data yields one stable exception key |

## Required Tests for Each Implemented Measure

Positive, negative, blank, zero denominator, boundary date, multi-filter, subtotal/total, and duplicate/orphan cases. No DAX is approved until the metric owner resolves every open rule.
