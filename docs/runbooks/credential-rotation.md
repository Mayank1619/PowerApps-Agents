# Credential Rotation

## Purpose

Handle credential rotation only for a separately approved integration that actually uses a managed credential.

## Prerequisites

Named credential owner, approved incident/change record, official rotation instructions, dependent-service inventory, rollback/revocation plan, and secure secret manager. The initial local workflow is delegated/read-only and stores no repository credential.

## Inputs

Credential identifier/owner and expiry metadata only. Never put credential values in this runbook, chat, source, logs, screenshots, tests, or command history.

## Procedure

1. Confirm a credential exists and rotation is authorized; do not create an app registration or secret by assumption.
2. Coordinate an approved overlap window and dependent-service update plan with the owner.
3. Generate/store the new value only in the organization's approved secret-management UI/process; do not transmit it through Copilot.
4. Update the approved runtime secret reference using the vendor process; never commit the value.
5. Validate authentication with a harmless approved read-only check.
6. Revoke the old credential only after the owner confirms success; document identifier, timestamp, and outcome, not the value.

## Expected Result

The owner confirms the new credential works, old credential revocation is verified, and no secret entered repository/logs.

## Validation

Use sanitized status/error evidence and the service's audit record. Scan affected local artifacts and rotate again through the owner if exposure is suspected.

## Common Failures

Unknown secret owner, mismatched credential version, missing consent, service outage, or secret in history. Stop and escalate; do not paste secret values into diagnostics.

## Safe Rollback

The credential owner follows the approved recovery sequence. Rollback may itself require a new credential and explicit approval.

## Escalation

Contact credential owner, identity administrator, service owner, and security incident owner. This workspace has no credential rotation to perform.
