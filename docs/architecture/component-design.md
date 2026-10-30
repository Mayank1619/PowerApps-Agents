# Component Design

Status: proposed; exact product capabilities must be verified before implementation.

| Component | Responsibility | Authority and boundary |
| --- | --- | --- |
| Developer | Supplies requirements, chooses scope, reviews artifacts, and gives explicit approvals | Human decision-maker; approval is specific to an operation and target |
| GitHub Copilot interface | Supports authoring and analysis through organization-approved GitHub Copilot | Does not receive additional service authority from repository instructions |
| Agent definitions and instructions | Constrain task focus, required outputs, and safe defaults | Guidance only; cannot replace server-side authorization |
| Git repository | Stores source, tests, configuration templates, decisions, and sanitized audit records | System of record for development assets; no secrets or production data |
| Local validation | Checks files and synthetic fixtures without reaching live services | Must fail closed when a required tool or configuration is missing |
| MCP client | Routes only configured, approved tool calls | User-specific configuration is not committed; tool inventory must be reviewed |
| MCP server | Validates schemas and authorization and calls a fixed Microsoft API surface | No arbitrary URL, Graph request, command, or permission selection |
| Microsoft identity | Authenticates the developer using an approved existing identity | Least privilege and service-side authorization remain controlling |
| SharePoint | Operational lists, libraries, files, and metadata | Read only in the first release; content is untrusted input |
| Power BI / Fabric | Semantic models, reports, and workspaces | Local development only until tooling and tenant policy are verified |
| Power Platform | Solutions, flows, connection references, and environment variables | Development-focused; no live flow change or publishing by default |
| Development and test | Isolated validation targets | Explicitly selected and allowlisted; synthetic data preferred |
| Production | Production workloads and data | Denied by default; no autonomous access or deployment |

## Separation of Responsibilities

Planning, artifact generation, validation, approval, and deployment are separate activities. Specialist agents may propose changes, but a QA agent cannot approve its own output. A deployment reviewer prepares instructions only. Deployment, if later approved, occurs through an independently controlled process and a human approver.

## Implementation Decisions Deferred

Do not select a custom MCP SDK, authentication library, Graph scope, plugin, package version, or CI host until the official source and organization policy are verified. No live server is included in this design phase.
