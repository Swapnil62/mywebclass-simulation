const { test, expect } = require('@playwright/test');

test('Responsive HomePage Test', async ({ page }) => {
  // Go to the URL
  await page.goto('https://swapnil62.github.io/mywebclass-simulation/Sprint1/theme/index.html');

  // Wait for the page to load
  await page.waitForLoadState();

  // Check that the page is responsive to small screen size
  await page.setViewportSize({ width: 375, height: 667 });
  expect(await page.$eval('header', el => el.offsetHeight)).toBeGreaterThan(0);

  // Check that the page is responsive to medium screen size
  await page.setViewportSize({ width: 768, height: 1024 });
  expect(await page.$eval('header', el => el.offsetHeight)).toBeGreaterThan(0);

  // Check that the page is responsive to large screen size
  await page.setViewportSize({ width: 1280, height: 800 });
  expect(await page.$eval('header', el => el.offsetHeight)).toBeGreaterThan(0);
});
