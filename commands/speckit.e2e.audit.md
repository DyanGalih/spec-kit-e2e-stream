---
description: 'Audit selector stability, test duplication, coverage gaps, and memory update needs.'
---

# /speckit.e2e.audit

Audit the current E2E suite for quality and memory alignment.

## What to inspect

1. Brittle selectors or fragile DOM chains.
2. Duplicate setup, login, fixture, or navigation logic.
3. Stale helpers that no longer match the feature flow.
4. Gaps between spec, implementation, and E2E coverage.
5. Places where memory should be updated after verification.

## Audit output

Return a short list of findings with:

- the issue
- why it matters
- the affected file or helper
- whether it should trigger a memory update

## Memory protocol

- Read the durable memory and the active feature synthesis before judging the suite when they exist.
- Call out missing or stale `specs/<feature>/memory.md` and `specs/<feature>/memory-synthesis.md` files when the repo uses the memory layer.
- If the audit confirms a durable lesson and the memory hub is installed, route it through the memory hub capture flow.

## Guardrails

- Do not flag style differences as problems unless they affect stability or reuse.
- Do not propose new abstractions unless duplication is real and repeated.
- Do not ignore known bug patterns recorded in memory.
- Do not block the audit solely because the memory hub is absent.
