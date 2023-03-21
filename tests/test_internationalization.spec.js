const { test, expect } = require('@playwright/test');

test('internationalization Language Test', async ({ page }) => {

  await page.goto('https://swapnil62.github.io/mywebclass-simulation/Sprint1/theme/index.html');
  await page.getByLabel('I agree to the GDPR Policy and Google Analytics policy.').check();
  await page.waitForTimeout(1000); // Wait for 1 seconds
  await page.getByRole('button', { name: 'Agree', exact: true }).click();
  await page.waitForTimeout(2000); // Wait for 2 seconds
  await page.getByRole('combobox', { name: 'Language Translate Widget' }).selectOption('de')
  await page.waitForTimeout(2000); // Wait for 2 seconds
  await page.getByRole('combobox', { name: 'Language Translate Widget' }).selectOption('es')
  await page.waitForTimeout(1000); // Wait for 1 seconds
});