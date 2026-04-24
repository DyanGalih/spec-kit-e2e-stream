# Spec Kit E2E Stream

Version: 0.1.0

Minimum Spec Kit version: 0.2.0

Reusable Spec Kit extension for generating, running, refreshing, and auditing end-to-end flows after implementation.

This extension is designed for browser-based web application E2E work. It is a good fit for teams that want repeatable, readable, feature-aligned test flows after Spec Kit implementation is finished.

## Quick Start

1. Open a Spec Kit project that already has `spec.md`, `plan.md`, and `tasks.md`.
2. Install this extension into that project.
3. Optionally install `spec-kit-memory-hub` if you want durable project memory and feature-local synthesis.
4. Run `/speckit.e2e.bootstrap` to create the baseline `tests/e2e/` structure.
5. Run `/speckit.e2e.generate` for the current feature when it is ready for E2E coverage.
6. Run `node scripts/e2e-menu.mjs --list` or `node scripts/e2e-menu.mjs --all --headed` to discover and execute scenarios locally.
7. When the feature or UI changes, run `/speckit.e2e.update` and then `/speckit.e2e.audit`.

## What it does

- scaffolds a portable `tests/e2e/` structure
- generates feature-aligned E2E specs from Spec Kit artifacts
- refreshes tests when the feature or UI changes
- audits selector stability, duplication, and coverage gaps
- keeps human-readable stream logging in the test flow
- includes helper primitives for opening pages, filling fields, clicking buttons, waiting for URLs, and reading visible text
- works without `spec-kit-memory-hub`, and becomes stronger when the memory hub is installed

## Compatibility

This extension is compatible with Spec Kit extension workflows and command naming conventions. It uses the Spec Kit manifest shape, namespaced slash commands, and the layered spec/plan/tasks workflow.

It is intended to work with Spec Kit projects that already use Spec Driven Development practices, especially web applications with browser-driven E2E flows.

## Install

1. Go to the target Spec Kit project.
2. Publish or choose the GitHub release you want to install, then use the Spec Kit extension installer with that release reference in the target project.
3. Confirm the repo already uses Spec Kit workflow files such as `spec.md`, `plan.md`, and `tasks.md`.
4. Optionally install `spec-kit-memory-hub` if you want durable project memory and feature-local synthesis.
5. Run `/speckit.e2e.bootstrap` to scaffold the E2E baseline.
6. Open the generated `tests/e2e/` folder and review the helpers, sample flow, and menu script.

### Install From GitHub Release

When you commit this project to GitHub and publish a release, install the release directly into a Spec Kit project instead of using a local path.

Use the release artifact or release reference that your Spec Kit installer supports, then run the same bootstrap command in the target project.

Example shape:

```text
specify extension add <github-release-reference-for-spec-kit-e2e-stream>
```

The exact release reference depends on how you publish the GitHub release, but the workflow stays the same:

1. publish the release on GitHub
2. install the release into the Spec Kit project
3. run `/speckit.e2e.bootstrap`
4. generate or update feature E2E flows

If the memory hub is installed, the workflow can also read and update:

- `docs/memory/PROJECT_CONTEXT.md`
- `docs/memory/ARCHITECTURE.md`
- `docs/memory/DECISIONS.md`
- `docs/memory/BUGS.md`
- `docs/memory/WORKLOG.md`
- `specs/<feature>/memory.md`
- `specs/<feature>/memory-synthesis.md`

If the memory hub is not installed, the extension still works from the current Spec Kit artifacts and implementation surface, but it will not have durable memory context.

## Usage

- `/speckit.e2e.bootstrap` creates the baseline E2E folders, helpers, menu script, and quickstart.
- `/speckit.e2e.generate` reads the current feature spec, plan, tasks, and memory, then generates feature-specific tests.
- `/speckit.e2e.update` refreshes existing tests when the feature changes.
- `/speckit.e2e.audit` checks for brittle selectors, stale helpers, duplicated logic, and memory gaps.

### How to run it in a project

1. After bootstrapping, generate or refresh the feature E2E suite with `/speckit.e2e.generate`.
2. Run the menu script to inspect available scenarios: `node scripts/e2e-menu.mjs --list`.
3. Run every scenario in headed mode when you want to watch the flow: `node scripts/e2e-menu.mjs --all --headed`.
4. Run a single scenario by name when you want a focused rerun: `node scripts/e2e-menu.mjs checkout`.
5. If the feature spec or UI changes, run `/speckit.e2e.update` first, then rerun the menu script.
6. If the suite feels brittle or incomplete, run `/speckit.e2e.audit`.

## Best Use

Use this extension when you want to create automatic E2E coverage for a web application after a feature is implemented.

It works especially well when:

- the app has stable routes, labels, test ids, or other repeatable locators
- the team wants readable terminal-style progress during test runs
- the feature already has Spec Kit artifacts such as `spec.md`, `plan.md`, and `tasks.md`
- you want E2E tests that can be refreshed when the feature changes

## Don't Install For

This extension is not a good fit for every project.

Do not install it if:

- you are developing a mobile app or a native app without browser-based E2E flows
- your project does not have a meaningful web UI to test
- you only need API tests, unit tests, or component-only tests
- you do not plan to use Spec Kit style workflow artifacts

## Memory workflow

This extension does not duplicate memory logic. When `spec-kit-memory-hub` is installed, it consumes the memory hub workflow:

1. read durable memory before planning or generation
2. read active feature memory before selecting flows and selectors
3. refresh feature memory and synthesis when the implementation changes
4. capture durable lessons after verification when evidence supports them

Without the memory hub, the same commands still work, but they rely on the current spec, plan, tasks, and implementation instead of durable memory.

## Stream style

Generated tests should read like a story in the terminal:

1. create fixture
2. open page
3. select option
4. fill form
5. submit
6. verify success

## Example runner

Use the menu script to discover scenarios locally:

```bash
node scripts/e2e-menu.mjs --list
node scripts/e2e-menu.mjs --all --headed
node scripts/e2e-menu.mjs feature-name
```
