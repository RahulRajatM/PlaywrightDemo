/*
static dropdown (select tag)
Dynamic/Auto Suggest dropdown (options keeps changing dynamically)/bootstrap dropdown
Hidden dropdown

*/

import { test, expect, Locator } from "@playwright/test";

test("auto suggest dropdown", async ({ page }) => {

    await page.goto("https://www.amazon.com/");

    // await page.locator("[alt='Continue shopping']").click();
    //  await page.waitForTimeout(3000);
    // await page.locator("input[name='q']").fill("smart");

    await page.getByLabel("Search Amazon").fill("Smart");
    await page.waitForTimeout(3000);

    const options: Locator = page.locator(".s-suggestion-ellipsis-direction"); // ctrl+shift+p --> emulate focused page
    const count = await options.count();
    console.log("No. of suggestion: " + count);

    //printing all the options
    for(let i=0; i<count; i++){
    //   const text= await options.nth(i).innerText();
    //const text=  await options.nth(i).getAttribute("aria-label");
    const text=  await options.nth(i).textContent();
        console.log(text)
    }

   // select the smart tv  

   for(let i=0; i<count; i++){
    const text=  await options.nth(i).textContent();
        if(text==="smart tv"){
           options.nth(i).click();
           break;
        }
    }

    await page.waitForTimeout(3000);
})