import { test, expect } from '@playwright/test';

test('linkedin-link test', async ({ page }) => {
  await page.goto('https://swapnil62.github.io/mywebclass-simulation/Sprint1/theme/index.html');
  await page.getByLabel('I agree to the GDPR Policy and Google Analytics policy.').check();
  await page.getByRole('button', { name: 'Agree', exact: true }).click();

  // Verify that the "Follow us on LinkedIn" link is present in the footer
  const linkedinLink = await page.$('footer a[href="https://www.linkedin.com/"]');
  expect(linkedinLink).not.toBeNull();
});
