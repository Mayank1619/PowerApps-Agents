# Report Page Design Proposal

Status: conceptual layout only; every metric remains subject to its definition sheet.

| Page | Persona and questions | Proposed visuals/interactions | Filters and accessibility |
| --- | --- | --- | --- |
| Executive Overview | Sponsor: overall capacity, utilization, open demand, coverage | KPI strip using approved measures; trend by approved period; demand status summary | Visible date/region/status context; meaningful titles and alt text; empty-state definitions |
| Capacity and Availability | Delivery manager: who is available and when? | Availability by period/role; assignment allocation comparison; consultant detail table if privacy-approved | Date, role, region; do not expose personal data by default; keyboard order |
| Skills Coverage | Skills lead: where is verified coverage strong/weak? | Skill coverage matrix; proficiency distribution; drill-through to approved synthetic-safe detail | Skill, verification age, region; non-color-only gap signals |
| Demand versus Supply | Sponsor/manager: where does demand exceed eligible supply? | Demand/supply by period and skill; coverage trend; scenario filters only if modeled | Date, skill, priority; label assumptions and avoid forecast claims |
| Assignment Risk | Delivery manager: what ends soon or is overallocated? | Ending-soon list, interval timeline, allocation exceptions | Horizon and status; define date boundaries; stable sort and accessible table |
| Training Progress | Training coordinator: completion and overdue status? | Completion trend, status distribution, due-date exceptions | Course/status/date; no individual ranking without approval |
| Data Quality and Exceptions | Data steward: what needs correction? | Exception count by rule/severity, synthetic-safe exception table | As-of/load date and rule; mask values; actionable empty/error state |
| Definitions and Guidance | All users: what do measures mean? | Glossary, measure-definition links, refresh/data lineage notes | No unsupported claims; provide accessible navigation and source ownership |

No visual is implemented. Final titles, measures, axes, interaction behavior, mobile layout, and theme require user testing and approved requirements.
