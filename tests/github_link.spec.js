import { test, expect } from '@playwright/test';

test('github-link test', async ({ page }) => {
  await page.goto('https://swapnil62.github.io/mywebclass-simulation/Sprint1/theme/index.html');
  await page.getByLabel('I agree to the GDPR Policy and Google Analytics policy.').check();
  await page.getByRole('button', { name: 'Agree', exact: true }).click();

  // Verify that the "Follow us on GitHub" link is present in the footer
  const githubLink = await page.$('footer a[href="https://github.com/"]');
  expect(githubLink).not.toBeNull();
});
