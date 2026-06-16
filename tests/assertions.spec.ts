import { test, expect } from "@playwright/test";


test(" Playwright assertion Demo", async ({ page }) => {

    // test.setTimeout(60000);  //60s

    //  test.slow(); // 90s (default is 30s)
    await page.goto("https://demowebshop.tricentis.com/")

    //1. Auto-retrying assertion (automatically reties until it passes ot timeout)
    await expect(page).toHaveURL("https://demowebshop.tricentis.com/");

    //Auto-retry: wait for eleement to be visible and have the expected test
    await expect(page.locator('text=Welcome to our store')).toBeVisible();
    await expect(page.locator(".product-grid.home-page-product-grid strong")).toHaveText("Featured products");

    //Actions- Auto wait works
    // await page.locator("input#small-searchterms").fill("laptop", { force: true }); // search box - force action(it will not do actionability check)
    // await page.locator(".button-1.search-box-button").click({ force: true }); // clicking on search button- force action


    //2.  Non-retrying assertion (executes immediately, no retry)
    const title = await page.title();
    expect(title.includes('Demo Web Shop')).toBeTruthy();

    const welcomeText = await page.locator('.topic-html-content-header').textContent({timeout:60000});
    expect(welcomeText).toContain('Welcome'); //no retry

    // Negating matcher (applicable for both auto-retry and non-retry assertion)
    // await expect(page.locator('.topic-html-content-header')).not.toBeVisible(); // auto-retry
    // expect(welcomeText).not.toContain('Welcome'); // no auto-retry


   // await page.waitForTimeout(5000);
});