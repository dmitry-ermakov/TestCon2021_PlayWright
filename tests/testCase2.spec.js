const { test, expect } = require('@playwright/test');

test('check search results for "Test" value', async ({ page }) => {
  await page.goto('https://duckduckgo.com/');
  await page.fill('#search_form_input_homepage', "Test");
  await page.click('#search_button_homepage');
  const firstResultText = await page.textContent('#r1-1');
  await page.pause();
  expect(firstResultText).toContain("Test");
  

});

