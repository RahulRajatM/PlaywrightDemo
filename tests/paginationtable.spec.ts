//https://datatables.net/examples/basic_init/zero_configuration.html

import { test, expect, Locator } from "@playwright/test"
import { only } from "node:test";

test("Read data from all table pages", async ({ page }) => {

    await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html");

    let hasMorePages = true;
    while (hasMorePages) {
        const rows:Locator[] = await page.locator("#example tbody tr").all();
        for (let row of rows) {
            console.log(await row.innerText());
        }
    await page.waitForTimeout(3000);
        //[aria-label='Next'] 
        //button[aria-controls='example']:has-text("›")
        const nextButton: Locator = page.locator("[aria-label='Next']");

        const isDisabled = await nextButton.getAttribute('class'); //dt-paging-button disabled next
        if (isDisabled?.includes('disabled')) {
            hasMorePages = false;
        } else {
            await nextButton.click();
        }
    }
});

test("Filter the rows and check count per pages", async ({ page }) => {
await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html");

 const dropdown:Locator= page.locator("#dt-length-0");

 await dropdown.selectOption({label: '25'});
//  const rows:Locator[]= await page.locator("#example tbody tr").all();
//  expect(rows.length).toBe(25);

 const rows= page.locator("#example tbody tr");
 await expect(rows).toHaveCount(25);

});


test.only("Search for specific data in the table", async ({ page }) => {
await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html");

 const searchinput:Locator= page.locator("#dt-search-0");
 await searchinput.fill("Paul Byrd")

 await page.waitForTimeout(5000);
 const rows= await page.locator("#example tbody tr").all();

 if(rows.length>0){

    let matchFound:boolean= false;
    for(let row of rows){

       if((await row.innerText()).includes("Paul Byrd")) {
        console.log("Match Found")
        matchFound= true;
        break;
       }
    }
    //expect(matchFound).toBe(true);
    expect(matchFound).toBeTruthy();
 }
 else{
    console.log("NO ROWS FOUND WITH GIVEN text..")
 }

});