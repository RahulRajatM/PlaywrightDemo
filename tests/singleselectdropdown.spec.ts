
import { test, expect, Locator } from "@playwright/test";

test("Single Select DropDown", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    //1. Select option from dropdown

    //page.locator("#country").selectOption('India'); // using visible text

    //page.locator("#country").selectOption({value: 'uk'}); // By using value attribute // selectOption() WORKS WHEN ELEMENT HAS SELECT TAG

    // page.locator("#country").selectOption({label: 'Germany'}); // By using Label

    // page.locator("#country").selectOption({index: 5}); // By using Index


    //2. check no. of options in the dropdown

    const dropdownoption: Locator = page.locator('#country>option');

    await expect(dropdownoption).toHaveCount(10);

    //3. Check an option is present in the dropdown

    const dropdownText: string[] = await page.locator('#country>option').allTextContents();
    // console.log(dropdownText);

    const allText: string[] = dropdownText.map(text => text.trim());
    console.log(allText);

    expect(allText).toContain("Japan"); // Check if 'Japan' is present in the Array


//4. printing options from the dropdown
for(let option of allText){
    console.log(option);
}



    await page.waitForTimeout(3000);

})
