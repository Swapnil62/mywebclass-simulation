import { test, expect } from '@playwright/test';

test('click Home menu item and verify title', async ({ page }) => {
  // Navigate to the page
  await page.goto('https://swapnil62.github.io/mywebclass-simulation/Sprint1/theme/index.html');
  await page.getByLabel('I agree to the GDPR Policy and Google Analytics policy.').check();
  await page.getByRole('button', { name: 'Agree', exact: true }).click();
  await page.getByRole('link', { name: 'Home' }).click();
  await page.waitForTimeout(1000); // Wait for 1 seconds

  // Verify that the page title is correct
  const pageTitle = await page.title();
  expect(pageTitle).toBe('My Web Class');
});
