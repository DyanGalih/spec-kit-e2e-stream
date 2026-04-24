import { expect, type Page } from '@playwright/test';

export async function openPage(page: Page, url: string) {
  await page.goto(url);
}

export async function fillField(page: Page, testId: string, value: string) {
  await page.locator(`[data-testid="${testId}"]`).fill(value);
}

export async function clickVisibleButton(page: Page, text: string) {
  await page.getByRole('button', { name: text }).click();
}

export async function waitForUrl(page: Page, expectedUrl: string) {
  await page.waitForURL(expectedUrl);
}

export async function readVisibleText(page: Page, testId: string) {
  const text = await page.locator(`[data-testid="${testId}"]`).textContent();
  return text ?? '';
}

export async function expectVisibleText(page: Page, testId: string, expectedText: string) {
  await expect(page.locator(`[data-testid="${testId}"]`)).toContainText(expectedText);
}