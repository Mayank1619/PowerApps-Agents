# Power BI and Copilot Tenant Setting Request

Status: no change requested; conditional guidance only.

## Verified Findings

The Microsoft Power BI Authoring MCP repository states that there is no tenant admin setting specifically blocking the local authoring server; it uses Power BI/XMLA connectivity and existing user permissions. It also states that, for enterprise GitHub Copilot accounts, the GitHub Copilot setting named **MCP servers in Copilot** may need administrator enablement if MCP tools do not appear.

Official sources:

- [Microsoft Power BI Modeling MCP README](https://github.com/microsoft/powerbi-modeling-mcp/blob/main/README.md)
- [Microsoft Power BI Authoring MCP Marketplace entry](https://marketplace.visualstudio.com/items?itemName=analysis-services.powerbi-modeling-mcp)

## Request Gate

Do not change any tenant setting now. First install/use must be separately approved; if and only if the approved Copilot client reports that MCP servers are unavailable because of enterprise policy, ask the GitHub Copilot/Enterprise owner to review the exact **MCP servers in Copilot** policy for the minimum intended audience.

## Minimum Scope and Validation

- Scope: the single relevant GitHub Copilot MCP policy for the approved developer/audience, if the owner confirms this is the documented blocker.
- Do not enable broader Copilot features, alter Fabric settings, change XMLA endpoints, create app registrations, grant Graph permissions, or grant Power BI roles as part of this request.
- Validate only after approval by confirming the policy state with the owner and discovering the approved tool in the intended Copilot profile. Then run the read-only MCP validation procedure; do not modify a model.

No tenant/Fabric administrator action is currently required or requested based on observed local state.
