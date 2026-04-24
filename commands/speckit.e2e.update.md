---
description: 'Refresh existing E2E tests when feature specs or implementation details change.'
---

# /speckit.e2e.update

Update existing E2E coverage so it matches the current feature.

## Inputs to read first

1. Current E2E tests in `tests/e2e/`
2. `docs/memory/PROJECT_CONTEXT.md`
3. `docs/memory/ARCHITECTURE.md`
4. `docs/memory/DECISIONS.md`
5. `docs/memory/BUGS.md`
6. `specs/<feature>/spec.md`
7. `specs/<feature>/plan.md`
8. `specs/<feature>/tasks.md`
9. `specs/<feature>/memory.md`
10. `specs/<feature>/memory-synthesis.md`

If the memory files are missing, update the suite from the spec, plan, tasks, and current implementation only.

## Update goals

1. Adjust only the affected tests and helpers.
2. Keep the stream-style logging and deterministic setup intact.
3. Refresh selectors when the UI changes, but prefer stable locators over fragile chains.
4. Preserve the project-specific flow model instead of rewriting the whole suite.
5. Capture durable lessons through the memory hub when the change is validated.

## Memory protocol

- Update feature memory when the spec or implementation changes the flow and the memory layer is available.
- Refresh synthesis so planning and verification see the current constraints when memory is in use.
- If a diff reveals reusable lessons and the memory hub is installed, capture them through the memory hub workflow.

## Guardrails

- Do not widen the edit scope just because a test is stale.
- Do not replace readable flow logging with raw browser calls.
- Do not erase project-specific behavior in the name of reuse.
- Do not block updates solely because the memory hub is absent.
