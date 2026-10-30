# Semantic Model Standard

Status: proposed; apply after Power BI project/tool compatibility is verified.

## Modeling

- Prefer a documented star schema. Identify facts, dimensions, grain, surrogate/business keys, and source lineage.
- Use one-directional relationships by default; document justified exceptions. Avoid ambiguous paths and unnecessary bidirectional filtering.
- Hide technical keys and helper columns from report authors. Use explicit measures for business metrics; use a measure table only where it improves navigation.
- Provide meaningful names, descriptions, display folders where helpful, and explicit format strings for business-facing objects.
- Document date-table design, date role behavior, timezone policy, and fiscal calendar assumptions.
- Document RLS roles, filters, test identities, and service permissions. Do not author or change live security roles without approval.

## Source and Refresh

- Maintain source-to-model lineage, ownership, refresh cadence, failure handling, and privacy assumptions.
- Parameterize sources; do not embed credentials or environment-specific IDs in M or model metadata.
- Record an explicit Import/DirectQuery/composite decision with freshness, scale, feature, and governance rationale.
- Evaluate incremental refresh and aggregations only when volume, refresh windows, and service capabilities justify them.

## SharePoint Mapping

- Preserve internal names separately from display names.
- Document flattening/expansion for person and lookup fields; normalize choice values and managed metadata intentionally.
- Define treatment for attachments, hyperlinks, multiline/calculated fields, booleans, currency, nulls, and malformed values.
- State list threshold, pagination, delegation, and refresh implications; avoid copying production values to tests.

## Review

Check grain, keys, relationship cardinality/direction, missing and duplicate keys, high-cardinality columns, unnecessary calculated columns, RLS, refresh, performance, and descriptions. Record evidence and rollback for every material change.
