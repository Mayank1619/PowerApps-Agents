# Data Dictionary

Status: conceptual and provisional; internal names are proposed, not live SharePoint metadata.

| List | Internal name | Display name | Type | Required | Transformation/validation |
| --- | --- | --- | --- | --- | --- |
| Consultants | `ConsultantKey` | Consultant Key | Single line text | Yes | Unique, non-empty synthetic key |
| Consultants | `DisplayLabel` | Display Label | Single line text | Yes | Use a neutral label in sample data |
| Consultants | `Active` | Active | Boolean | Yes | Preserve true/false; missing is an exception |
| Consultants | `RoleCode` | Role | Choice | No | Normalize choice text to controlled value |
| Consultants | `RegionCode` | Region | Choice | No | Do not infer geographic identity |
| Consultants | `StartDate` | Start Date | Date only | No | Keep date-only semantics; no timezone shift |
| Skills | `SkillKey` | Skill Key | Single line text | Yes | Unique, non-empty synthetic key |
| Skills | `SkillName` | Skill Name | Single line text | Yes | Trim whitespace; controlled spelling |
| ConsultantSkills | `Consultant` | Consultant | Lookup | Yes | Expand lookup ID and display value separately |
| ConsultantSkills | `Skill` | Skill | Lookup | Yes | Expand lookup ID and display value separately |
| ConsultantSkills | `Proficiency` | Proficiency | Choice | No | Threshold and order require owner definition |
| ConsultantSkills | `VerifiedOn` | Verified On | Date only | No | Define expiry/recency rule before use |
| Assignments | `Consultant` | Consultant | Lookup | Yes | Validate referenced key exists |
| Assignments | `Demand` | Demand | Lookup | No | Optional relationship requires owner confirmation |
| Assignments | `StartDate` / `EndDate` | Start / End Date | Date only | Yes | Flag end before start; overlap rule TBD |
| Assignments | `AllocationPercent` | Allocation Percent | Number | Yes | Require 0..100; decide whether over-allocation is exception |
| ClientDemand | `RequiredFTE` | Required FTE | Number | Yes | Require non-negative; unit definition TBD |
| ClientDemand | `Status` | Demand Status | Choice | Yes | Only owner-approved states count as open |
| TrainingProgress | `Status` | Training Status | Choice | Yes | Map approved completion states; due-date rule TBD |
| Availability | `AvailableHoursPerWeek` | Available Hours / Week | Number | Yes | Non-negative; baseline/work-week definition TBD |

Person, managed metadata, hyperlink, attachment, calculated, multiline, and currency columns are not required in this conceptual model. Reassess and document their expansion/normalization if source discovery later finds them.
