const { test, expect } = require('@playwright/test');
test('Privacy Policy Link test', async ({ page }) => {
    await page.goto('https://swapnil62.github.io/mywebclass-simulation/Sprint1/theme/index.html');
    // Verify that the "Privacy Policy" link is present in the footer menu:
    expect(await page.$('.footer-menu li:last-child a')).toBeTruthy();
 });