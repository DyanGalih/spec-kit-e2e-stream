# Example Generated E2E Artifacts

This folder shows the structure the extension should generate in a target project.

It is intentionally generic:

- it uses reusable helper modules
- it keeps stream-style logging visible
- it avoids hardcoding a specific product domain
- it shows where project-specific selectors and routes belong

## Example layout

- `tests/e2e/helpers/flow-logger.ts`
- `tests/e2e/helpers/selectors.ts`
- `tests/e2e/helpers/auth.ts`
- `tests/e2e/helpers/setup.ts`
- `tests/e2e/menu.ts`
- `tests/e2e/flows/sample-implemented-feature.spec.ts`
