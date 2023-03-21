const { test, expect } = require('@playwright/test');

test('Responsive HomePage Test', async ({ page }) => {

  await page.goto('https://swapnil62.github.io/mywebclass-simulation/Sprint1/theme/index.html');
  await page.getByLabel('I agree to the GDPR Policy and Google Analytics policy.').check();
  await page.waitForTimeout(1000); // Wait for 1 seconds
  await page.getByRole('button', { name: 'Agree', exact: true }).click();

  await page.setViewportSize({ width: 375, height: 667 });
  await page.waitForTimeout(2000); // Wait for 2 seconds

  await page.setViewportSize({ width: 768, height: 1024 });
  await page.waitForTimeout(2000); // Wait for 2 seconds

  await page.setViewportSize({ width: 1280, height: 800 });
  await page.waitForTimeout(2000); // Wait for 2 seconds

});
