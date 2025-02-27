const { test, expect } = require('@playwright/test');

test('GDPR Consent Cookies are stored', async ({ page, context }) => {
  // Navigate to the page and agree to the GDPR policy
  await page.goto('https://swapnil62.github.io/mywebclass-simulation/Sprint1/theme/index.html');
  await page.getByLabel('I agree to the GDPR Policy and Google Analytics policy.').check();
  await page.waitForTimeout(1000); // Wait for 1 seconds
  await page.getByRole('button', { name: 'Agree', exact: true }).click();

  // Check if the cookie is present
  const cookies = await context.cookies();
  const myCookie = cookies.find(cookie => cookie.name === '_ga');
  expect(myCookie).toBeTruthy();
});
