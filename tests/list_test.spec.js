 const { test, expect } = require('@playwright/test');

test('List title test', async ({ page }) => {
  await page.goto('https://swapnil62.github.io/mywebclass-simulation/Sprint1/theme/list.html');
  const listPageTitle = await page.title();
  expect(listPageTitle).toBe('My Web Class');
});