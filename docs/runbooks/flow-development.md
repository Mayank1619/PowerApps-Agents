# Power Automate Flow Development

## Purpose

Specify, review, and test a cloud flow without changing a live environment.

## Prerequisites

Approved requirement, flow owner, environment owner, connector/DLP approval, verified local toolchain, and sanitized synthetic test contract. The official Power Automate plugin/FlowAgent is not installed and exposes write-capable tools.

## Inputs

Purpose, trigger, conditions, inputs/outputs, owner, connection references, environment variables, retry/concurrency, monitoring, data classification, tests, and rollback.

## Procedure

1. Complete `power-platform/flows/flow-specification.template.md`.
2. Resolve trigger and status semantics, idempotency, date/time-zone, failure, timeout, retry, and concurrency rules with the owner.
3. Use synthetic fixtures/mocks to validate conditions and contracts. Never include a real connection secret or production sample.
4. Inspect existing flows only through an approved read-only tool and authorized target.
5. Do not create, update, enable, disable, publish, delete, run, cancel, or resubmit a live flow without operation-specific approval.

## Expected Result

A complete, reviewable flow specification and local test cases; no live flow is changed.

## Validation

Run local tests and `npm run validate`; independently review connection references, environment variables, DLP, retry/error scopes, owner, monitoring, and rollback.

## Common Failures

Missing connector metadata, wrong environment, unresolved connection, premium trigger, DLP restriction, or ambiguous recipient. Stop and record the exact blocker; do not guess action parameters.

## Safe Rollback

Discard/revise local specification. A live-flow restore or disable action is an external write and requires separate owner approval.

## Escalation

Ask the flow owner, environment owner, connector/DLP administrator, and operations/security owner for their respective decisions.
