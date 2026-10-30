# Conceptual SharePoint List Designs

Status: design proposal only. These lists are not created in SharePoint.

Use stable text identifiers as primary keys where SharePoint numeric IDs are not suitable across environments. Keep lookup display values separate from stored IDs. Confirm list sizes, ownership, retention, privacy classification, and indexed/filter columns with the service owner before implementation.

| List | Conceptual key | Columns (internal name: type; required) | Notes |
| --- | --- | --- | --- |
| Consultants | ConsultantKey: text | DisplayLabel: text; Active: Boolean; RoleCode: choice; RegionCode: choice; StartDate: date | Use synthetic/non-personal display labels in development fixtures. Decide whether any person field is necessary. |
| Skills | SkillKey: text | SkillName: text; Category: choice; Active: Boolean | Define controlled vocabulary and ownership. |
| ConsultantSkills | ConsultantSkillKey: text | Consultant: lookup to Consultants; Skill: lookup to Skills; Proficiency: choice; VerifiedOn: date; VerificationStatus: choice | Enforce unique Consultant+Skill if supported by the approved design. Document lookup expansion. |
| Assignments | AssignmentKey: text | Consultant: lookup; Demand: lookup; StartDate: date; EndDate: date; AllocationPercent: number; Status: choice | Define overlap and allocation rules; do not infer client-sensitive details. |
| ClientDemand | DemandKey: text | Skill: lookup; StartDate: date; EndDate: date; RequiredFTE: number; Priority: choice; Status: choice | Avoid client names unless approved; use a business-safe demand label. |
| TrainingProgress | TrainingProgressKey: text | Consultant: lookup; CourseCode: text; Status: choice; DueDate: date; CompletedOn: date | Establish eligible denominator and course privacy rules. |
| Availability | AvailabilityKey: text | Consultant: lookup; StartDate: date; EndDate: date; AvailableHoursPerWeek: number; Status: choice | Specify calendar grain, capacity baseline, partial weeks, and leave exclusions. |

## Common Controls

- Separate display name from internal column name in the data dictionary.
- Index only columns justified by documented query/filter patterns and list-size thresholds.
- Avoid storing unnecessary personal data; use least-privilege site/list access.
- Do not use calculated columns for business metrics that belong in the semantic model.
- Validate required fields, unique keys, lookup integrity, choice vocabulary, numeric ranges, and date ordering with synthetic tests.
