# Update Prompt Template

Refresh an existing E2E suite so it matches the current feature.

## Read first

- current tests in `tests/e2e/`
- durable memory files
- active feature memory and synthesis
- the feature spec, plan, and tasks

## Update rules

- Touch only the affected tests and helpers.
- Preserve flow logger usage and deterministic setup.
- Refresh selectors when the UI changed.
- Keep the suite readable as a live stream.

## Memory handling

- Update feature memory when the spec or implementation changes the flow.
- Refresh synthesis so future planning sees the current constraints.
- Route durable lessons through the memory hub capture flow when evidence exists.

## Output

- updated E2E files
- a short summary of what changed and why
- any memory follow-up required by the update
