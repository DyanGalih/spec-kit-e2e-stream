# Usage

## Bootstrap

Run `/speckit.e2e.bootstrap` when a repo needs the baseline E2E structure.

Step-by-step:

1. Open the Spec Kit project.
2. Run `/speckit.e2e.bootstrap`.
3. Review the created `tests/e2e/` folder.
4. Confirm the helper files and sample flow fit the project.
5. If you use the memory hub, confirm the `docs/memory/` and `specs/<feature>/memory*.md` files are available.

This should:

- create `tests/e2e/`
- add shared helpers and stream logging
- add a menu script
- add quickstart docs
- remind the user about `spec-kit-memory-hub` if it is missing

## Generate

Run `/speckit.e2e.generate` after a feature is specified and implemented enough to test.

Step-by-step:

1. Make sure the feature has `spec.md`, `plan.md`, and `tasks.md`.
2. If the project uses `spec-kit-memory-hub`, make sure the relevant memory files are present.
3. Run `/speckit.e2e.generate` for the active feature.
4. Review the generated tests in `tests/e2e/`.
5. Adjust selectors or routes only if the generated suite does not match the real app behavior.

The command should read:

- the current feature `spec.md`, `plan.md`, and `tasks.md`
- durable memory in `docs/memory/`
- active feature memory and synthesis in `specs/<feature>/`

It should then create E2E specs that mirror the actual implementation.

## Update

Run `/speckit.e2e.update` when the feature or UI changes.

Step-by-step:

1. Make the feature or UI change.
2. Run `/speckit.e2e.update`.
3. Check whether selectors, routes, or form steps need refresh.
4. Rerun the affected E2E scenarios from the menu script.

This command should:

- keep the existing suite structure
- refresh selectors and steps only where needed
- preserve readable flow logging
- keep memory in sync when the change is meaningful

## Audit

Run `/speckit.e2e.audit` to find:

Step-by-step:

1. Run the suite or review the generated tests.
2. Run `/speckit.e2e.audit`.
3. Fix brittle selectors, duplicate setup, or stale helpers.
4. If the project uses memory, capture durable lessons after verification.

- brittle selectors
- duplicated setup logic
- stale helpers
- gaps between spec, implementation, and tests
- places where memory should be refreshed after verification

## Runner

Use the menu script to list or run E2E scenarios:

Step-by-step:

1. List scenarios: `node scripts/e2e-menu.mjs --list`
2. Run all scenarios: `node scripts/e2e-menu.mjs --all`
3. Run all scenarios in headed mode: `node scripts/e2e-menu.mjs --all --headed`
4. Run a single scenario by name: `node scripts/e2e-menu.mjs checkout`

```bash
node scripts/e2e-menu.mjs --list
node scripts/e2e-menu.mjs --all --headed
node scripts/e2e-menu.mjs checkout
```
