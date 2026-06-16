import { test, expect } from "@playwright/test"
import { TIMEOUT } from "node:dns";

test(" Autowaiting and forcing", async ({ page }) => {

    // test.setTimeout(60000);  //60s

    test.slow(); // 90s (default is 30s)
    await page.goto("https://demowebshop.tricentis.com/")

    //Assertion- Auto wait works
    await expect(page).toHaveURL("https://demowebshop.tricentis.com/", { timeout: 10000 });
    await expect(page.locator('text=Welcome to our store')).toBeVisible({ timeout: 1000 });

    //Actions- Auto wait works
    await page.locator("input#small-searchterms").fill("laptop", { force: true }); // search box - force action(it will not do actionability check)
    await page.locator(".button-1.search-box-button").click({ force: true }); // clicking on search button- force action


})