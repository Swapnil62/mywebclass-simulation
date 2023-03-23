const { test, expect } = require('@playwright/test');
test('Privacy Policy Link test', async ({ page }) => {
    await page.goto('https://swapnil62.github.io/mywebclass-simulation/Sprint1/theme/index.html');
    // Verify that the "Home" link is present in the navigation bar:
    expect(await page.$('nav .nav-item:first-child a')).toBeTruthy();
 });