import { test, expect } from '@playwright/test';

test('Clicking on GDPR Policy link navigates to the correct link', async ({ page }) => {
  // Navigate to the webpage
  await page.goto('https://swapnil62.github.io/mywebclass-simulation/Sprint1/theme/index.html');

  // Click on the "GDPR Policy" link
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'GDPR Policy' }).click();
  const page1 = await page1Promise;

  // Verify that the page navigated to the correct link
  const url = page1.url();
  expect(url).toBe('https://gdpr-info.eu/');
});
