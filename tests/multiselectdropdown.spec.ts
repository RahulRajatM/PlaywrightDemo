import { test, expect, Locator } from "@playwright/test";

test("multi select dropdown", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    //1. Select options from the dropdown

    // await page.locator('#colors').selectOption(['Red', 'Green']); // Using visible text

    //await page.locator('#colors').selectOption(['white', 'Green']); // Using value (attribute)

    // await page.locator('#colors').selectOption([{label:' Green'}, {label: 'Yellow'}, {label: 'White'}   ]); // Using label

    //  await page.locator('#colors').selectOption([{index:0}, {index:2}]); // Using index


    //2. Check no. of options in the dropdown

    const allOption: Locator = page.locator('#colors>option');
    await expect(allOption).toHaveCount(7);


    //3. check an option is present in the dropdown

    const options: string[] = (await page.locator('#colors>option').allTextContents()).map(text => text.trim());

    console.log(options);
    await expect(options).toContain('Yellow');

    // 4. printing all the options

    for (let text of options) {
        console.log(text);
    }


    await page.waitForTimeout(5000);

})