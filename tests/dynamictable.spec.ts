import { test, expect, Locator } from "@playwright/test"
import { count } from "node:console";
import { text } from "node:stream/consumers";

test("Dynamic web table", async ({ page }) => {

    await page.goto("https://practice.expandtesting.com/dynamic-table");

    const table: Locator = page.locator(".table-striped tbody");
    await expect(table).toBeVisible();

    // step 1: For Chrome process get value of CPU load.
    // Read each row for chrome presense
    const rows: Locator = table.locator('tr');
    const allRows: Locator[] = await rows.all();
    const rowsCount: number = allRows.length;
    console.log("No. of rows: ", rowsCount);
    expect(rowsCount).toBe(4);

    let cpuLoad = '';
    for (let row of allRows) {
        const processname: string = await row.locator("td").nth(0).innerText();
        if (processname === "Chrome") {

            cpuLoad = await row.locator("td:has-text('%')").innerText(); //css syntax
            // const cpuLoad = await row.locator('td').filter({hasText:'%'}).innerText(); // playwright syntax
            console.log("CPU Load of Chrome: ", cpuLoad);  //             const cpuLoad = await row.locator("td, {has-text:'%'}").innerText(); // playwright syntax
            break;
        }
    }
// step 2. compare with the value in the yellow label

const yellowBoxText= await page.locator("#chrome-cpu").innerText();
console.log("Yellow Box Text: ",yellowBoxText);

if(yellowBoxText.includes(cpuLoad)){
    console.log("CPU LOAD OF CHROME IS EQUAL")
}else{
    console.log("CPU LOAD OF CHROME IS NOT EQUAL")
}
 expect(yellowBoxText).toContain(cpuLoad);

    
    await page.waitForTimeout(5000);

})