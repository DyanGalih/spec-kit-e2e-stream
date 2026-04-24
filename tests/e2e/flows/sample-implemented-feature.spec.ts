import { bootstrapAuth } from '../helpers/auth';
import { clickVisibleButton, expectVisibleText, fillField, openPage, waitForUrl } from '../helpers/browser';
import { createFlowLogger } from '../helpers/flow-logger';
import { byTestId } from '../helpers/selectors';
import { test } from '../helpers/setup';

test('sample implemented feature stream', async ({ page }) => {
  const flow = createFlowLogger('sample implemented feature');

  flow.step('create fixture');
  const auth = await bootstrapAuth({ userRole: 'member' });
  flow.note(`using ${auth.description}`);

  flow.step('open page');
  await openPage(page, '/example');

  flow.step('select option');
  await page.locator(byTestId('feature-option')).click();

  flow.step('fill form');
  await fillField(page, 'feature-input', 'spec-kit');

  flow.step('submit');
  await clickVisibleButton(page, 'Save');
  await waitForUrl(page, '**/example/success');

  flow.step('verify success');
  await expectVisibleText(page, 'feature-success', 'saved');

  flow.success(`finished in ${flow.elapsed()}ms`);
});