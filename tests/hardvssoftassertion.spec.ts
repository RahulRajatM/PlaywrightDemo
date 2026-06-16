import { test, expect } from "@playwright/test"

test("  Hard and Soft  Assertion", async ({ page }) => {

    // test.setTimeout(60000);  //60s

    await page.goto("https://demowebshop.tricentis.com/")

    /*
// Hard assertion
await expect(page).toHaveTitle('Demo Web Shop1');
await expect(page).toHaveURL("https://demowebshop.tricentis.com/");


const logo= page.locator("img[alt='Tricentis Demo Web Shop']");
await expect(logo).toBeVisible();

await page.waitForTimeout(5000);
*/


// Soft assertion
await expect.soft(page).toHaveTitle('Demo Web Shop1');
await expect.soft(page).toHaveURL("https://demowebshop.tricentis.com/");


const logo= page.locator("img[alt='Tricentis Demo Web Shop']");
await expect.soft(logo).toBeVisible();

await page.waitForTimeout(5000);
});