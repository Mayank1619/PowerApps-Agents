# SharePoint to Power Query Mapping

Status: mapping proposal; no connector, endpoint, credential, or refresh was configured.

| Source list | Model destination | Mapping and normalization | Validation |
| --- | --- | --- | --- |
| Consultants | DimConsultant | Keep key, active, role/region choices, start date; omit unnecessary personal fields | Unique key; Boolean not null |
| Skills | DimSkill | Keep key/name/category/active; trim controlled-choice text | Unique key/name; active status |
| ConsultantSkills | BridgeConsultantSkill | Expand Consultant and Skill lookup IDs separately; retain verification/proficiency | Both keys resolve; no duplicate pair |
| Assignments | FactAssignment | Expand consultant/demand keys; explicit dates and numeric allocation | Valid interval; allocation range; demand key policy |
| ClientDemand | FactDemand | Expand skill key; explicit required-FTE numeric type and choice status | Nonnegative demand; controlled status |
| TrainingProgress | FactTrainingProgress | Expand consultant; preserve attempt grain and null completion date | Course key present; state/date consistency |
| Availability | FactAvailability | Expand consultant; preserve interval and hours/week | Nonnegative hours; no invalid interval |

## Transformation Requirements

- Parameterize the source site/list mapping outside checked-in example data; never embed credentials or live IDs.
- Use named steps, remove unused fields early, set explicit types, normalize Choice `.Value` and Lookup ID/display fields according to the actual connector schema, and document query-folding behavior.
- Handle missing lists/columns as explicit errors rather than silently returning empty tables.
- Keep date-only values as dates. If a source exposes timestamps, document timezone conversion before truncating to dates.
- Avoid loading person fields unless a requirement justifies them; mask or omit them from tests and logs.
- Use the synthetic JSON fixture for transformation design; validate actual field payload shape only through an approved read-only source later.
