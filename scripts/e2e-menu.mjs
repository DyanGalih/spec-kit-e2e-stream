#!/usr/bin/env node

import { spawnSync } from 'node:child_process';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';

const cwd = process.cwd();
const e2eRoot = path.join(cwd, 'tests', 'e2e');
const packageJsonPath = path.join(cwd, 'package.json');
const args = process.argv.slice(2);
const isPlaywrightProject = detectPlaywright(packageJsonPath);

if (!existsSync(e2eRoot)) {
  console.log(
    'No tests/e2e directory found. Run /speckit.e2e.bootstrap first.',
  );
  process.exit(0);
}

const scenarios = discoverScenarios(e2eRoot);

if (args.includes('--list') || scenarios.length === 0) {
  printScenarios(scenarios, isPlaywrightProject);
  process.exit(0);
}

const filter = args.find((value) => !value.startsWith('--'));
const headed = args.includes('--headed');
const runAll = args.includes('--all') || !filter;
const selected = runAll
  ? scenarios
  : scenarios.filter((scenario) => scenario.name.includes(filter));

if (selected.length === 0) {
  console.log(`No E2E scenarios matched "${filter}".`);
  printScenarios(scenarios, isPlaywrightProject);
  process.exit(1);
}

printScenarios(selected, isPlaywrightProject, true);

if (!isPlaywrightProject) {
  console.log(
    'Playwright was not detected in package.json. Update this menu script to match the project runner.',
  );
  process.exit(0);
}

const command = [
  'exec',
  'playwright',
  'test',
  ...selected.map((scenario) => scenario.relativePath),
];
if (headed) {
  command.push('--headed');
}

const result = spawnSync('npx', command, {
  cwd,
  stdio: 'inherit',
});

process.exit(result.status ?? 0);

function detectPlaywright(filePath) {
  if (!existsSync(filePath)) {
    return false;
  }

  try {
    const packageJson = JSON.parse(readFileSync(filePath, 'utf8'));
    const dependencies = {
      ...(packageJson.dependencies ?? {}),
      ...(packageJson.devDependencies ?? {}),
    };

    return Boolean(dependencies['@playwright/test']);
  } catch {
    return false;
  }
}

function discoverScenarios(root) {
  return readdirSync(root, { withFileTypes: true })
    .flatMap((entry) => {
      const entryPath = path.join(root, entry.name);
      if (entry.isDirectory()) {
        return discoverScenarios(entryPath);
      }

      if (
        !entry.name.endsWith('.spec.ts') &&
        !entry.name.endsWith('.spec.js')
      ) {
        return [];
      }

      return [
        {
          name: entry.name.replace(/\.spec\.(ts|js)$/, ''),
          relativePath: path.relative(cwd, entryPath),
        },
      ];
    })
    .sort((left, right) => left.name.localeCompare(right.name));
}

function printScenarios(items, playwrightDetected, running = false) {
  const status = running ? 'Running' : 'Discovered';
  console.log(
    `${status} ${items.length} scenario${items.length === 1 ? '' : 's'}${playwrightDetected ? '' : ' (Playwright not detected)'}.`,
  );

  for (const item of items) {
    console.log(`- ${item.name} -> ${item.relativePath}`);
  }

  if (!running) {
    console.log('');
    console.log(
      'Usage: node scripts/e2e-menu.mjs [--list] [--all] [--headed] [name-filter]',
    );
  }
}
