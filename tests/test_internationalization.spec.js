const { test, expect } = require('@playwright/test');

test('internationalization Language Test', async ({ page }) => {
  await page.goto('https://swapnil62.github.io/mywebclass-simulation/Sprint1/theme/index.html');
  const page1Promise = page.waitForEvent('popup');
  await page.getByLabel('I agree to the GDPR Policy and Google Analytics policy.').check();
  await page.getByRole('button', { name: 'Agree', exact: true }).click();
  await page.getByRole('combobox', { name: 'Language Translate Widget' }).selectOption('de')
  await page.getByRole('combobox', { name: 'Language Translate Widget' }).selectOption('es')
});