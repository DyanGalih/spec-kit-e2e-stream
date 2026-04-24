# Audit Prompt Template

Audit the E2E suite for stability, reuse, and memory alignment.

## Inspect

- brittle selectors
- duplicate setup or navigation logic
- stale helpers
- missing feature coverage
- memory gaps between the spec, implementation, and E2E suite

## Memory rules

- Read the durable memory and active feature synthesis before judging the suite.
- Call out places where memory should be refreshed after verification.
- Do not invent a durable lesson without evidence.

## Output

- findings ordered by severity
- affected files or helpers
- memory follow-up items
