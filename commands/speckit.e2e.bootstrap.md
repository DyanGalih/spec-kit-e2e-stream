---
description: 'Scaffold the E2E folder structure, helpers, menu runner, and quickstart.'
---

# /speckit.e2e.bootstrap

Bootstrap the repository for Spec Kit E2E work.

## Required behavior

1. Create or update `tests/e2e/` with a reusable layout.
2. Add shared helpers for flow logging, selectors, auth/bootstrap, and test setup.
3. Add browser helpers for opening pages, filling fields, clicking visible buttons, waiting for URLs, and reading visible text.
4. Add a menu script so developers can list and run E2E flows easily.
5. Add a quickstart or README that explains how to discover and execute flows.
6. Add config templates only when they help the target repo keep paths and runners consistent.
7. If the companion memory extension is missing, remind the user that this extension still runs without it, but memory-aware generation is richer with `spec-kit-memory-hub` installed.

## Memory-aware bootstrap

Before creating feature-specific scaffolds, look for the memory workflow and use it when present:

1. Read `docs/memory/PROJECT_CONTEXT.md`.
2. Read `docs/memory/ARCHITECTURE.md`.
3. Read `docs/memory/DECISIONS.md`.
4. Read `docs/memory/BUGS.md`.
5. Read `docs/memory/WORKLOG.md`.
6. Read active feature memory files under `specs/<feature>/memory.md` and `specs/<feature>/memory-synthesis.md` when they exist.

If those files are missing, continue with the current feature spec, plan, tasks, implementation, and existing test surface.

## Output shape

Create a portable baseline that keeps the project-specific details out of the extension itself:

- `tests/e2e/helpers/flow-logger.*`
- `tests/e2e/helpers/selectors.*`
- `tests/e2e/helpers/auth.*`
- `tests/e2e/helpers/setup.*`
- `tests/e2e/helpers/browser.*`
- `tests/e2e/menu.*` or a project script that lists and runs scenarios
- a short README or quickstart
- optional config for base URL, browser mode, and memory paths

## Runtime expectation

This command must work in two modes:

- without `spec-kit-memory-hub`, using only Spec Kit artifacts and the current codebase
- with `spec-kit-memory-hub`, using durable and feature-local memory as an additional input

## Guardrails

- Do not invent business rules.
- Do not hardcode selectors into the extension.
- Keep the generated structure readable and easy to rerun.
- Preserve any existing project files.
