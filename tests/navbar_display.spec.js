const { test, expect } = require('@playwright/test');
test('Navbar is displayed', async ({ page }) => {
    await page.goto('https://swapnil62.github.io/mywebclass-simulation/Sprint1/theme/index.html');
    const navbar = await page.waitForSelector('.navbar');
    expect(navbar).not.toBeNull();
  });