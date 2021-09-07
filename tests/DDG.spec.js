const { test, expect } = require('@playwright/test');

/*test('basic test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  //await page.pause();
  const title = page.locator('.navbar__inner .navbar__title');
  await expect(title).toHaveText('Playwright');
});*/

test.only('check logo', async ({ page }) => {
  await page.goto('https://duckduckgo.com/');
  const isLogoVisible = await page.isVisible('#logo_homepage_link');
  //const logo = page.locator('#logo_homepage_link');
  await expect(isLogoVisible).toBe(true);
});