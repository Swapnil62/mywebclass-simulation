const { test, expect } = require('@playwright/test');

test('internationalization Language Test', async ({ page }) => {

  await page.goto('https://swapnil62.github.io/mywebclass-simulation/Sprint1/theme/index.html');
  await page.getByLabel('I agree to the GDPR Policy and Google Analytics policy.').check();

  await page.getByRole('button', { name: 'Agree', exact: true }).click();
  await page.waitForTimeout(2000); // Wait for 2 seconds

  await page.getByRole('combobox', { name: 'Language Translate Widget' }).selectOption('de');
  await page.waitForTimeout(2000); // Wait for 2 seconds

  const sectionTitle = await page.waitForSelector('h2.section-title');
  const sectionTitleText = await sectionTitle.textContent();
  expect(sectionTitleText).toContain('Willkommen auf unserer Webseite')

  await page.getByRole('combobox', { name: 'Language Translate Widget' }).selectOption('es');
  await page.waitForTimeout(2000); // Wait for 2 seconds


  // Check the text of the h2.section-title element
  const sectionTitle2 = await page.waitForSelector('h2.section-title');
  const sectionTitleText2 = await sectionTitle2.textContent();
  expect(sectionTitleText2).toContain('Bienvenido');

});