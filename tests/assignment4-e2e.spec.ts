// https://blazedemo.com/
// choose To and From
// Select lowest fare and the coreesponding flight
// fill all the details and book ticket
//verify the success message

import { test, expect, Locator } from "@playwright/test"

test("e2e test of flight ticket", async ({ page }) => {

    await page.goto("https://blazedemo.com/");
    await page.locator("[name='fromPort']").selectOption({ value: 'Boston' });
    await page.locator("[name='toPort']").selectOption({ value: 'London' });
    await page.locator(".btn.btn-primary").click();
    // await page.waitForTimeout(5000);
    //approach 1
    /*
     let allPrice:number[] = [];
     let allChoice: Locator[] = [];
     const rows: Locator[] = await page.locator("[class='table'] tbody tr").all();
     for (let row of rows) {
         const price = (await row.locator("td").nth(5).innerText()).replace(/\$/, "");
         const amount = Number(price);
         allPrice.push(amount);
         const choice = (row.locator("td").nth(0));
         allChoice.push(choice);
         // console.log(price);
     }
     const list = allPrice.map((price, index) => ({
         price: price,
         choice: allChoice[index]
     }));
 
     const sortedlist = [...list].sort(
         (a, b) => a.price - b.price
     );
 */

    let products: { price: number, choice: Locator }[] = [];

    const rows: Locator[] = await page.locator("[class='table'] tbody tr").all();
    for (let row of rows) {
        const price = Number((await row.locator("td").nth(5).innerText()).replace(/\$/, ""));
        const choice = (row.locator("td").nth(0));
        products.push({ price, choice })
    }
    const sortedProducts = [...products].sort(

        (a, b) => a.price - b.price
    )
    console.log(sortedProducts);
    await sortedProducts[0].choice.click();
    //await page.waitForTimeout(5000);

    await page.locator("#inputName").fill("Rahul");
    await page.locator("#address").fill("Hi-tech city");
    await page.locator("#city").fill("Hyderbad");
    await page.locator("#state").fill("Telangana");
    await page.locator("#zipCode").fill("12345");
    await page.locator("#cardType").selectOption({ value: 'amex' });
    await page.locator("#creditCardMonth").fill("06");
    await page.locator("#creditCardYear").fill("2026");
    await page.locator("#nameOnCard").fill("R R Mish");
    await page.locator(".btn-primary").click();
    const flag: boolean = await page.locator(".container.hero-unit h1").isVisible();
    expect(flag).toBeTruthy();
})