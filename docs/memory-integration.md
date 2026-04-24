# Memory Integration

`spec-kit-memory-hub` is a companion extension, not a duplicate memory system. The E2E extension can still run without it.

## Read order

Before planning, generating, updating, or auditing E2E coverage, read:

1. `docs/memory/PROJECT_CONTEXT.md`
2. `docs/memory/ARCHITECTURE.md`
3. `docs/memory/DECISIONS.md`
4. `docs/memory/BUGS.md`
5. `docs/memory/WORKLOG.md`
6. `specs/<feature>/memory.md`
7. `specs/<feature>/memory-synthesis.md`

If those files do not exist, the commands fall back to the current Spec Kit artifacts and implementation state.

## Write order

- After a feature is implemented or verified, capture durable lessons through the memory hub workflow.
- Update feature memory and synthesis whenever the active feature context changes.
- Keep durable memory concise, evidenced, and reusable.

## What not to do

- Do not dump raw investigation notes into durable memory.
- Do not write changelog-style entries into memory files.
- Do not duplicate memory logic inside E2E helpers or scripts.

## Practical rule

Treat memory as an input to E2E generation and an output of validation, not as a separate side channel.
