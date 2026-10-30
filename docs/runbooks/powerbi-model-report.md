# Power BI Model and Report Development

## Purpose

Create reviewable local semantic-model/report proposals and diagnose local Power BI connection issues.

## Prerequisites

Approved business requirements, verified local Power BI Desktop/PBIP support, and an organization-approved authoring path. The Microsoft Power BI Authoring MCP extension was verified in Marketplace but is not installed here; Power BI Desktop is not detected.

## Inputs

Approved schema, metric definitions, persona/questions, privacy/RLS requirements, refresh assumptions, and an explicitly approved non-production target if connection testing is allowed.

## Procedure

1. Review the semantic-model, DAX, Power Query, and report standards.
2. Confirm table grain, keys, relationship direction/cardinality, date strategy, lineage, and storage-mode assumptions.
3. Approve measure numerator/denominator, filters, exclusions, blank behavior, date context, owner, and examples before writing DAX.
4. Design report pages only from approved requirements and existing measures; specify filters, interactions, alt text, keyboard access, mobile layout, and empty/error states.
5. Test local project artifacts with synthetic data where the verified tool supports it. Do not claim DAX execution or refresh without evidence.
6. For MCP connection troubleshooting, verify extension/version, active VS Code profile, read-only mode, identity, explicit development model, endpoint, and policy. Stop if a write-capable default mode appears.

## Expected Result

Local proposals trace to approved requirements, contain tests/limitations, and do not modify or publish a live model/report.

## Validation

Run `npm test` and `npm run validate`; separately verify PBIP/DAX/M/report rendering in an approved local tool before claiming product behavior. Check accessibility and model diff.

## Common Failures

Copilot profile mismatch, unavailable Desktop/PBIP support, MCP tool missing, model permission denial, ambiguous measure definition, or sensitive query output. Stop; never switch to production.

## Safe Rollback

Revert only reviewed local artifacts. A model restore/replace/publish is a separate approved external operation.

## Escalation

Ask the Power BI owner about model access/format, business owner about metric definitions, Copilot/MCP owner about server policy, and security owner about query-data handling.
