const { test, expect } = require('@playwright/test');

test('Our Story Heading', async ({ page }) => {

  await page.goto('https://swapnil62.github.io/mywebclass-simulation/Sprint1/theme/story.html');

  // Verify h1 tag text
  const h1Tag = await page.$('h1');
  expect(h1Tag).not.toBeNull();
  const h1TagText = await h1Tag.innerText();
  expect(h1TagText).toBe('Our Story');
});
