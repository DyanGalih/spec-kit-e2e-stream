# Installation

This extension is meant to be installed into a Spec Kit project. It can run without the companion memory extension, but memory-aware generation is stronger when `spec-kit-memory-hub` is installed.

## Requirements

- Spec Kit initialized in the target repository
- `spec-kit-memory-hub` installed if you want durable project memory and feature synthesis
- an E2E runner, preferably Playwright when the project already uses it

## Steps

1. Open the target Spec Kit project in your editor.
2. Install the published GitHub release of this extension into that project through the Spec Kit extension mechanism.
3. Make sure the repo is already using Spec Kit conventions such as `spec.md`, `plan.md`, and `tasks.md`.
4. Optionally install `spec-kit-memory-hub` if you want durable memory and feature synthesis.
5. Run `/speckit.e2e.bootstrap`.
6. Review the generated `tests/e2e/` structure and adjust project-specific selectors or runner settings as needed.
7. If the project already has Playwright, keep using its existing config and test runner style.

## Example install flow

If your Spec Kit project supports extension installation from a GitHub release reference, the flow usually looks like this:

```bash
cd /path/to/your-spec-kit-project
specify extension add <github-release-reference-for-spec-kit-e2e-stream>
```

After installation, run the bootstrap command in the project:

```text
/speckit.e2e.bootstrap
```

## What gets created

- `tests/e2e/` as the root E2E area
- shared helper files for logging, selectors, auth/bootstrap, and setup
- shared browser helpers for opening pages, filling fields, clicking buttons, waiting for URLs, and reading visible text
- a menu script for listing and running flows
- a quickstart or README
- an optional config template

## Minimal Spec Kit Version

This extension expects Spec Kit `0.2.0` or newer.

That baseline matches the extension manifest format and the layered spec/plan/tasks workflow used by this extension.

## Memory Hub Is Optional

`spec-kit-memory-hub` is not required to install or run this extension.

If you install it, the E2E workflow can also read and update durable memory and feature-local synthesis files. If you do not install it, the extension still runs from the current Spec Kit artifacts and implementation surface.

## GitHub Release Install Notes

When the repository is published on GitHub, prefer the release artifact over a local development path for real project installs.

This keeps the installation reproducible across teams because everyone installs the same tagged release rather than a mutable working tree.

## Notes on portability

The extension intentionally keeps app-specific details out of the extension package itself. The generated files should reference the current project routes, labels, test ids, and form models instead.
