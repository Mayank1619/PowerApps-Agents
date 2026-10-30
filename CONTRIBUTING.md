# Contributing

## Scope

This repository is a development workspace for proposals, source-controlled artifacts, and local validation. AI-generated changes are proposals and require human review. Production deployment and live resource writes are not part of the default workflow.

## Before Making a Change

- Read the applicable agent instructions, security policy, and architecture decisions.
- Confirm the target is a local artifact or an explicitly approved development resource.
- Record requirements, assumptions, and acceptance criteria before implementation.
- Do not add identifiers, credentials, personal data, or production samples.

## Change Process

1. Make the smallest change that satisfies a traceable requirement.
2. Run the relevant local validation and record its result under `docs/build-log/`.
3. Update `docs/status.md` at phase boundaries.
4. Request independent review for security-sensitive changes.
5. Obtain explicit human approval before any destructive, publishing, sharing, permission-changing, deployment, or production-write operation.

## Dependencies

Use only organization-approved Microsoft or GitHub components. Verify publisher, official source, package identity, version, license, and security posture before adding a dependency. Do not configure external model APIs.
