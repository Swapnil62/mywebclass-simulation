const { test, expect } = require('@playwright/test');

test('GDPR Disagree', async ({ page }) => {
  await page.goto('https://swapnil62.github.io/mywebclass-simulation/Sprint1/theme/index.html');
  await page.click('.modal-footer .btn-secondary');
  const modal = page.locator('#gdpr-modal');
  await expect(modal).toBeHidden();
});
