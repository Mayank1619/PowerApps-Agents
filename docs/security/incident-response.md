# Incident Response

Status: local development procedure; follow the organization's incident process as authoritative.

## Trigger Examples

Suspected token/secret exposure; unexpected service endpoint; unapproved production access; accidental write/share/publish; sensitive data in a prompt/log/fixture; malicious instructions in external content; compromised dependency; unexpected tool behavior; or data returned beyond approved scope.

## Immediate Steps

1. Stop the affected task and do not retry the operation.
2. Disable the local MCP/tool connection using its approved client procedure; do not delete remote data or alter permissions as an improvised response.
3. Preserve sanitized facts: time, tool/version, operation category, environment category, correlation/error code, and observed impact. Do not copy tokens or sensitive payloads into the incident record.
4. Notify the organization security/incident owner and the relevant service owner through approved channels.
5. Let the authorized identity owner revoke/rotate compromised credentials using the official process. Do not request or transmit secrets through Copilot or repository files.
6. Assess data movement, logs, prompts, model-provider boundary, affected resource, and any downstream copy.
7. Resume only after the owner confirms containment, scope, and required remediation; run focused validation and record evidence.

## Recovery and Rollback

Rollback is a separately authorized service operation, not an automatic agent action. Identify the last known artifact version, supported restore mechanism, and approver. For a live SharePoint/Power Platform/Power BI incident, preserve evidence and wait for the resource owner before changing state.
