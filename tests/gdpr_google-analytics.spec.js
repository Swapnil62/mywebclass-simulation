const { test, expect } = require('@playwright/test');

test('GDPR Consent Banner Disappears', async ({ page }) => {

  await page.goto('https://swapnil62.github.io/mywebclass-simulation/Sprint1/theme/index.html');

  const bannerSelector = '#gdpr-consent-banner';

  const bannerVisible = await page.isVisible(bannerSelector);
  await page.getByLabel('I agree to the GDPR Policy and Google Analytics policy.').check();
  await page.waitForTimeout(1000); // Wait for 1 second
  await page.getByRole('button', { name: 'Agree', exact: true }).click();

  // Expect the GDPR consent banner to disappear after the button is clicked
  const bannerHidden = await page.waitForSelector(bannerSelector, { state: 'hidden' });
  expect(bannerHidden).toBeDefined();
});
