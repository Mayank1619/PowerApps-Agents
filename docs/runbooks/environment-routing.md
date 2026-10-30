# Environment Routing

Status: policy and reference only; no environment IDs or auth profiles are configured.

## Purpose

Prevent accidental cross-environment operations in PAC CLI, FlowAgent, and other Power Platform tools.

## Rules

- Require a user-confirmed environment name and development classification before any service call.
- Resolve ambiguity with an approved inventory; never select a default, partial-name match, most-recent environment, or production target automatically.
- Verify effective identity, tenant/cloud, environment, and tool permissions independently. Azure CLI and FlowAgent may use separate account/cache state.
- Do not store live environment IDs, URLs, tenant IDs, or account names in example configuration or source control.
- Tests must mock resource discovery. Live lists require explicit authorization because they disclose environment and flow metadata.
- Read-only authorization does not imply access to sensitive flow definitions or run data.
- Stop on account mismatch, unknown sovereign cloud, unexpected endpoint, ambiguous environment, or insufficient permission.

## PAC CLI Considerations

The official reference documents `pac auth list` as displaying authentication-profile names, URLs, and users; it is sensitive terminal output and must not enter build logs. `pac env list` lists Dataverse environments; it is not proof that any one is the approved development target. The `pac env select` command changes the default organization for the current profile and therefore requires explicit confirmation and a verified target before use.

## FlowAgent Considerations

The official plugin describes environment discovery and current-environment selection tools. Treat selecting/changing a current environment as a state change. After selection, verify the result through documented read-only get-current/resolve operations before any list/get call. Do not use create/update/publish/delete/run tools.

## Validation and Rollback

Before use, record the approved target alias, environment category, identity category, command/tool, timestamp, and result without secrets or private identifiers. Rollback from a local routing mistake is to stop and reselect only after human confirmation; it is not authorization to modify or clean up resources.
