# Testing Instructions (Draft)

Verify the installed, organization-approved Copilot client supports this instruction-file format before relying on automatic application.

- Test local transformations and contracts with synthetic data or mocks; never fixture production content.
- Cover positive, negative, blank, boundary, malformed, oversized, authorization-denied, timeout, and safe-throttling cases where applicable.
- Keep live integration tests disabled by default. Separate unit, contract, integration, security, accessibility, and governance evidence.
- Record exact commands actually executed and report unverified checks plainly. Fail closed if a mandatory check or tool is unavailable.
