import { test, expect } from "@playwright/test";


test("handling popup", async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://testautomationpractice.blogspot.com/");

    //Multiple popup
    // page.waitForEvent('popup');
    // await page.locator("#PopUp").click();

    await Promise.all([page.waitForEvent('popup'), await page.locator("#PopUp").click()]);
    await Promise.all([page.waitForEvent('popup'), await page.locator("#PopUp").click()]);


    const allPopupWindows = context.pages(); // returns Array of pages

    console.log("No. of pages/windows: ", allPopupWindows.length); //2

    console.log(allPopupWindows[0].url());
    console.log(allPopupWindows[1].url());
    console.log(allPopupWindows[2].url());

    for (let pw of allPopupWindows) {

        const title = await pw.title();
        if (title.includes("Selenium")) {

            const allReadmore = await pw.locator(".selenium-button-container").all();
            console.log("All read more links on Selenium popup: ", allReadmore.length)
            //perform any other action
            await pw.close();
        }
    }



    await page.waitForTimeout(5000);


})