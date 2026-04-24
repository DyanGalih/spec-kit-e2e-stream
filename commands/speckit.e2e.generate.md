---
description: 'Generate E2E tests from Spec Kit artifacts and current implementation behavior.'
---

# /speckit.e2e.generate

Generate E2E coverage for the current feature.

## Inputs to read first

1. `docs/memory/PROJECT_CONTEXT.md`
2. `docs/memory/ARCHITECTURE.md`
3. `docs/memory/DECISIONS.md`
4. `docs/memory/BUGS.md`
5. `docs/memory/WORKLOG.md`
6. `specs/<feature>/spec.md`
7. `specs/<feature>/plan.md`
8. `specs/<feature>/tasks.md`
9. `specs/<feature>/memory.md`
10. `specs/<feature>/memory-synthesis.md`

If the memory files are missing, proceed with `spec.md`, `plan.md`, `tasks.md`, and the implementation surface that is already present in the repo.

## Generation goals

1. Use the current implementation, routes, components, labels, and form models.
2. Generate one or more deterministic E2E specs that reflect the main user flows.
3. Prefer stable locators and reusable helpers over one-off browser commands.
4. Keep the execution readable like a live stream in the terminal.
5. Treat memory as both an input and a potential output of the workflow.

## Memory protocol

- Read feature memory before deciding what to generate when it exists.
- Refresh `specs/<feature>/memory.md` and `specs/<feature>/memory-synthesis.md` when the feature context changes and the memory layer is in use.
- If the evidence supports a durable lesson and the memory hub is installed, hand it off through the memory hub capture workflow instead of dumping raw notes into the repo.
- Do not write noisy, speculative, or changelog-style memory entries.

## Output shape

- one root test directory under `tests/e2e/`
- reusable helpers under `tests/e2e/helpers/`
- flow logging that prints clear milestones
- tests that can be rerun locally without extra manual cleanup

## Guardrails

- Do not invent a generic flow when the repo already exposes a real one.
- Do not generate brittle CSS chains when a stable test id or role exists.
- Do not broaden scope beyond the current feature unless the spec requires it.
- Do not block generation solely because the memory hub is absent.
