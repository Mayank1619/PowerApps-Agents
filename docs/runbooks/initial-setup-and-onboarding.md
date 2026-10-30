# Initial Setup and Onboarding

## Purpose

Bring a developer into this local source-controlled workspace without connecting to tenant resources.

## Prerequisites

Organization-approved Git/GitHub and GitHub Copilot; Node.js/npm for local checks; access to this repository. Do not assume Copilot extension, Copilot CLI, PAC, Azure CLI, Power BI Desktop, or administrator access is present.

## Inputs

Approved Git remote/repository, organization policy links, developer identity category, requested local workflow, and owner contacts. Do not place account names, tokens, or resource IDs in this repository.

## Procedure

1. Review `README.md`, `SECURITY.md`, `docs/status.md`, and `docs/prerequisites.md`.
2. Verify the approved VS Code profile and GitHub Copilot extension in that profile. Here `copilot` resolves to an internal VS Code shim, not verified Copilot CLI.
3. If this directory is not already a repository and an approved remote is known, initialize/clone only under the repository owner's instructions; do not guess a remote or push changes.
4. Run `npm test`, `npm run lint`, `npm run security`, and `npm run validate` where local policy permits.
5. Review the agent drafts in `.github/agents/`; their file schema/loading is unverified. Use prompts manually as text until the approved client confirms support.
6. Ask the designated MCP owner whether an approved SharePoint server exists. Do not register one during onboarding.
7. Record only sanitized local validation and unresolved prerequisites.

## Expected Result

Developer can inspect/edit local files, run dependency-free checks, and understands which integrations are unavailable or gated.

## Validation

All available Node checks pass; no live identity, environment, or data is accessed. Confirm generated output remains under ignored `.local-output/`.

## Common Failures

Missing extension/CLI; different VS Code profile; PowerShell execution policy; unknown remote; or missing organization owner. Stop and record the precise blocker rather than guessing.

## Safe Rollback

Revert only new local onboarding changes through reviewed Git history. Do not delete the repository, reset user state, remove credentials, or change remote settings as troubleshooting.

## Escalation

Ask the repository owner about source-control remotes; Copilot owner about extension/CLI; security owner about data policy; MCP owner about approved server availability.
