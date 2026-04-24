# Bootstrap Prompt Template

Use this template to scaffold a repo for Spec Kit E2E work.

## Context

- Target repo may already have Spec Kit features in progress.
- Treat the memory hub as a companion dependency, not a duplicate memory system.
- Keep the scaffold portable across projects and stacks.

## Required reading

Before creating files, read the memory layer when it exists:

1. `docs/memory/PROJECT_CONTEXT.md`
2. `docs/memory/ARCHITECTURE.md`
3. `docs/memory/DECISIONS.md`
4. `docs/memory/BUGS.md`
5. `docs/memory/WORKLOG.md`
6. `specs/<feature>/memory.md`
7. `specs/<feature>/memory-synthesis.md`

## Deliverables

- `tests/e2e/` structure
- shared helpers
- browser helpers for page actions and visible text checks
- menu runner script
- quickstart documentation
- optional config template

## Stream style

When you add the sample artifacts, make the flow read like a live terminal story:

- create fixture
- open page
- select option
- fill form
- submit
- verify success

## Memory requirement

If the memory hub is unavailable, say so explicitly and ask the user to install `spec-kit-memory-hub` before feature-specific generation.
