# Validation Report

Date: 2026-10-29
Scope: local repository only

## Automated Results

| Check | Result | Evidence |
| --- | --- | --- |
| Node unit tests | Pass: 4 passed, 0 failed | `npm test` |
| JavaScript syntax | Pass | `npm run lint` (`node --check`) |
| High-confidence secret scan | Pass: no findings | `npm run security` |
| Master repository checks | Pass: 11 of 11 | `npm run validate`; see generated `.local-output/validation-report.json` and `docs/build-log/validation-summary.md` |
| JSON examples | Pass | Included in master validation |
| Synthetic fixture key relationships | Pass | Included in master validation and unit tests |
| Agent metadata and no tool grants | Pass | Included in master validation |
| Governance defaults/MCP disabled | Pass | Included in master validation |
| Markdown fences and terminal newlines | Pass | Included in master validation |
| CI SHA/permission/deployment boundaries | Pass, static checks | Included in master validation |

## Blocked or Not Run

- PowerShell `.ps1` checker runtime: blocked before execution by machine policy. Static PowerShell parser reported no syntax errors. No bypass attempted.
- GitHub Actions: not run; repository has no remote or configured runner.
- Dependency Review: conditional on public repository or private-repo GitHub Advanced Security entitlement; repository visibility/licensing unknown.
- Dependabot alerts, branch protection, protected environment reviewers, and secret scanning settings: not enabled; require repository/organization owner action.
- Copilot agent/instruction file loading, GitHub Copilot CLI, MCP startup/discovery, Azure/PAC authentication, and user permissions: unverified/unavailable.
- Power BI Desktop/PBIP/PBIR rendering, DAX execution, Power Query refresh, report accessibility, and model performance: not run.
- SharePoint/Power Automate live integration, cloud-flow tests, package validation, deployment, and rollback: not run.

## Test Data and Safety

All reference fixture records are synthetic. No production/customer data, credentials, site/environment IDs, or tokens were added. No external model API or live service was called.

## Validation Commands

- `npm test`
- `npm run lint`
- `npm run security`
- `npm run validate`
- `git init` (local repository metadata only)
- `git status --short --branch` (read-only status)
