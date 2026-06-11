// https://testautomationpractice.blogspot.com/
//Pagination Web Table
// Read the data from all pages of the table and then select the checkbox

import { test, expect, Locator } from "@playwright/test";

test("Read data from all pages of the table and then select the checkbox", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    // const rows: Locator[] = await page.locator("#productTable tbody tr").all();
    const pages: Locator[] = await page.locator("#pagination li a").all();


    console.log("No. of pages: ", pages.length);

    let hasNextPage: boolean = true;
    do {
        for (let i in pages) {
            await pages[i].click();

            const rows: Locator[] = await page.locator("#productTable tbody tr").all();

            for (const row of rows) {
                let i = 0;
                while (i < 3) {
                    const data: string = await row.locator("td:not(:last-child)").nth(i).innerText();

                    // const data: string = await row.locator('td').nth(i).innerText();
                    console.log(data);
                    i++;
                }
                //    await row.locator('td:last-child').click();
                //await row.getByRole('checkbox').check();
                let checkbox: Locator = row.locator("td input[type='checkbox']");
                checkbox.check();
                await expect(checkbox).toBeChecked();
                await page.waitForTimeout(1000);
            }
        }
        hasNextPage = false;

    } while (hasNextPage)


})