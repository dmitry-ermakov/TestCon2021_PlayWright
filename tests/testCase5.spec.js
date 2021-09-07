const { test, expect } = require('@playwright/test');

test('check search results for "panda" in titles', async ({ page }) => {
    await page.goto('https://duckduckgo.com/');
    await page.fill('#search_form_input_homepage', "intitle:panda");
    await page.click('#search_button_homepage');
    const results = await page.evaluate(() => Array.from(document.querySelectorAll('.results_links_deep'), element => element.textContent));
        results.forEach(result => {
            expect(result.toLowerCase()).toContain('panda');
        });

  
  });
  

 test('check automatic navigation to first result', async ({ page }) => {
    await page.goto('https://duckduckgo.com/');
    await page.fill('#search_form_input_homepage', "!w Lithuania");
    await page.click('#search_button_homepage');
    await page.waitForNavigation();
    const pageUrl = page.url();
    expect(pageUrl).toBe('https://en.wikipedia.org/wiki/Lithuania');
    const headingText = await page.textContent('h1#firstHeading');
    expect(headingText).toContain("Lithuania");

 });


 const passwordLengths = ['8', '32', '64'];
 passwordLengths.forEach(passwordLength => {
 test(`check generated passwords ${passwordLength}`, async ({ page }) => {
    await page.goto('https://duckduckgo.com/');
    await page.fill('#search_form_input_homepage', ("password " + passwordLength));
    await page.click('#search_button_homepage');
    const generatedPassword = await page.textContent('h3.c-base__title');
    expect(generatedPassword.length).toEqual(+passwordLength);


 });

});

