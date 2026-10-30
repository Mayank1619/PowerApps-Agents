# Development Environment and Site

## Purpose

Select an explicitly approved development environment and SharePoint site before a separately authorized read-only inspection.

## Prerequisites

Existing approved identity; named development environment/site owner; approved server/tool and documented read scope. This workspace has no PAC/Azure CLI and no approved SharePoint MCP configured. The organization MCP owner must first resolve server availability.

## Inputs

Human-confirmed environment alias and category, site owner, purpose, data classification, allowed fields, maximum sample size, retention, and tool configuration. Do not commit environment/site IDs, URLs, or user names.

## Procedure

1. Ask the environment owner for the exact development target and whether read access is authorized.
2. If PAC is installed later, verify local help against the official reference before use. `pac env list` is read-only but reveals environment metadata; `pac env select` changes local routing and requires explicit confirmation.
3. If an approved SharePoint server is identified, verify its exact allowlist mechanism and user permissions. Add a site only through that approved process.
4. Begin with site/list schema and column metadata; request selected fields and bounded items only when separately approved.
5. Record an alias and approval reference, not resource IDs or content, in local evidence.

## Expected Result

An explicitly named development target is selected under the intended identity, and only approved read-only metadata is visible.

## Validation

Reconfirm the effective account, environment category, site scope, returned field set, page/result limit, and absence of writes. Stop if any value is ambiguous.

## Common Failures

Unknown environment, partial-name collision, default environment, missing list, permission denial, or unapproved site. Do not fall back to another environment/site.

## Safe Rollback

Stop and clear local selection only through documented client behavior. Do not modify the environment or SharePoint site.

## Escalation

Ask the environment owner for target/access; SharePoint owner for site scope; MCP owner for approved server; security owner for data classification.
