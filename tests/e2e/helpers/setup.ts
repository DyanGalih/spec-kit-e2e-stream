import { test as base, expect } from '@playwright/test';

export const test = base.extend<{
  flowName: string;
}>({
  flowName: ['spec-kit-e2e', { option: true }],
});

export { expect };

export function createScenarioName(featureName: string, stepName: string) {
  return `${featureName} :: ${stepName}`;
}