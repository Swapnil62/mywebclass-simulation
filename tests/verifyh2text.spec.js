import { test, expect } from '@playwright/test';

test('Verify h2 tag text', async ({ page }) => {
  // Navigate to the page
  await page.goto('https://swapnil62.github.io/mywebclass-simulation/Sprint1/theme/index.html');
  await page.getByLabel('I agree to the GDPR Policy and Google Analytics policy.').check();
  await page.getByRole('button', { name: 'Agree', exact: true }).click();

  //Verify h2 tag text
  const h2Element = await page.$('h2');
  const h2Text = await h2Element.innerText();
  await expect(h2Text).toContain('Welcome to our site');
});
