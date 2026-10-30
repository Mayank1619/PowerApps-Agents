# Power Platform AI Workspace

## Purpose

A source-controlled, development-focused workspace for using GitHub Copilot in VS Code or GitHub Copilot CLI to plan and validate Power BI, Power Platform, and SharePoint-backed solutions. Generated content remains a proposal until reviewed by a person.

## Architecture

The repository will hold agent instructions, prompts, standards, solution artifacts, tests, and audit-friendly phase records. Copilot is the developer interaction layer; Microsoft-supported tools and explicitly approved MCP servers are separate execution boundaries. Local source control is the system of record. External model APIs are prohibited.

## Prerequisites

See [docs/prerequisites.md](docs/prerequisites.md) and [docs/environment-assessment.md](docs/environment-assessment.md). Requirements depend on the selected workflow. Do not install tools until their official source and organizational approval are verified.

## Setup

1. Use an organization-approved GitHub account and VS Code/Copilot installation.
2. Review [SECURITY.md](SECURITY.md), the applicable instructions, and the environment assessment.
3. Keep user-specific MCP configuration in ignored local files; use committed examples only as templates.
4. Select an explicitly approved development environment/site before any integration is enabled.
5. Run the repository's local validation before proposing a change.

No live MCP connection, tenant configuration, package installation, or service login is enabled by this initial scaffold.

## Supported Use Cases

- Requirements analysis and solution design.
- Read-only discovery of approved SharePoint metadata where an approved tool is available.
- Local Power Query M, DAX, semantic-model, report, and flow design with tests and documentation.
- PBIP/PBIR authoring only after the installed Microsoft tooling confirms support.
- Review and preparation of deployment instructions without automatic deployment.

## Unsupported by Default

- External generative AI APIs.
- Autonomous production operations or deployment.
- Unapproved MCP servers, application permissions, tenant changes, or permission grants.
- Live SharePoint writes, flow publication, report publication, solution import/export, sharing, deletion, or credential changes.
- Copying production data into fixtures or logs.

## Agent Responsibilities

Specialist agents will analyze requirements, SharePoint data, Power BI models/reports, Power Automate flows, governance, and deployment readiness. The QA/governance reviewer must be independent of the authoring agent. See `.github/agents/` when those definitions are added.

## MCP Responsibilities

MCP servers expose narrowly scoped tools and enforce their own input validation and authorization. A local configuration is not evidence of organizational approval. The default profile must remain read-only; write capabilities require a separately reviewed design and explicit approval.

## Security Model

Least privilege, signed-in approved identities, no secret storage in the repository, untrusted-source treatment, read-only defaults, explicit human approval gates, and separation of development/test/production are mandatory. See [docs/admin-requests.md](docs/admin-requests.md) and [docs/architecture/threat-model.md](docs/architecture/threat-model.md) as they are developed.

## Local Development and Validation

Keep generated artifacts in Git, use synthetic fixtures, and run scoped tests before review. Validation commands will be documented after the chosen frameworks and official tool metadata are verified. No validation in this scaffold implies access to a live tenant.

## Deployment Controls

There is no enabled deployment workflow. Every deployment requires a separately approved environment, validated artifact, named human approver, pre/post checks, and rollback plan. Production is never the default target.

## Troubleshooting

Start with `docs/environment-assessment.md`, the relevant `docs/runbooks/` entry, and the sanitized phase log. Do not retry failed authentication or external commands unchanged, and do not place raw diagnostic output containing identifiers or secrets in the repository.
