const { test, expect } = require('@playwright/test');

test('Google Analytics API import test', async ({ page }) => {
    await page.goto('https://swapnil62.github.io/mywebclass-simulation/Sprint1/theme/index.html');
    await page.waitForTimeout(1000); // Wait for 1 second
    const analyticsScript = await page.$('script[src="js/googleanalys.js"]');
    await expect(analyticsScript).not.toBeNull();
});