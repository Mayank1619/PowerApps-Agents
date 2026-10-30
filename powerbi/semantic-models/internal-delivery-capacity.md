# Proposed Semantic Model

Status: conceptual star-schema proposal; not a PBIP project and not validated in Power BI Desktop.

## Fact and Dimension Tables

- `DimConsultant`: one row per stable synthetic/approved consultant key.
- `DimSkill`: one row per skill key.
- `DimDate`: approved calendar/fiscal attributes; role-playing dates may be needed for assignment start/end, demand start/end, and completion date.
- `BridgeConsultantSkill`: one row per verified consultant-skill relationship. Filter direction and many-to-many behavior require explicit tests.
- `FactAssignment`: one row per assignment; grain is assignment key.
- `FactDemand`: one row per demand request; grain is demand key.
- `FactAvailability`: one row per consultant availability interval/snapshot; establish interval grain before summing.
- `FactTrainingProgress`: one row per consultant/course attempt or latest-state record; owner must choose grain.
- `FactDataQualityException`: optional derived test output, not a live SharePoint list.

## Relationship Defaults

Use one-directional dimension-to-fact relationships by default. Keep bridge relationships explicit and avoid ambiguous bidirectional paths. Disconnected date-role tables or `USERELATIONSHIP` may be required; select one documented strategy after validating required report interactions.

## Storage and Refresh Decisions

Record Import/DirectQuery choice from freshness, volume, connector behavior, licensing, and privacy needs. Document refresh cadence and failure owner. Consider incremental refresh only when measured volume/refresh windows justify it. No mode or service capability is claimed for SharePoint sources in this proposal.

## Security

Determine whether row-level security is required, define personas and test identities, and verify source permissions independently. Do not infer that a Power BI role replaces SharePoint permissions. No live RLS role is created.
