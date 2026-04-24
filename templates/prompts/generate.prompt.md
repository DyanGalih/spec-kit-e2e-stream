# Generate Prompt Template

Generate E2E coverage for a single Spec Kit feature.

## Read first

- durable memory: `docs/memory/PROJECT_CONTEXT.md`, `ARCHITECTURE.md`, `DECISIONS.md`, `BUGS.md`, `WORKLOG.md`
- active feature memory: `specs/<feature>/memory.md`, `specs/<feature>/memory-synthesis.md`
- spec artifacts: `spec.md`, `plan.md`, `tasks.md`
- current implementation surface: routes, UI components, test ids, labels, and forms

## Decision rules

- Prefer actual implemented behavior over generic placeholder flows.
- Prefer stable locators over CSS chains.
- Prefer one root element per flow when the UI supports it.
- Keep setup deterministic.
- Keep logging readable and human-oriented.

## Memory handling

- Use memory as a first-class input when choosing flows and selectors.
- Update feature memory and synthesis when the feature context changes.
- Capture durable lessons only when supported by evidence from the implementation or verification result.

## Output

- E2E specs under `tests/e2e/`
- helpers under `tests/e2e/helpers/`
- stream-style flow logging
- a short note describing any memory updates that should follow
