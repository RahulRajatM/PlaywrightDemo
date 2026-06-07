import { test, expect, Locator } from "@playwright/test";
import { constants } from "node:buffer";

test("Single Select DropDown", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");


  // const dropdownOp: Locator = page.locator("#animals>option"); //sorted

    const dropdownOp:Locator=  page.locator("#colors>option"); // not sorted, no duplicate
    // console.log(await dropdownOp.allTextContents());

    const optionTxt: string[] = (await dropdownOp.allTextContents()).map(text => text.trim());

    const myset = new Set<string>();  // set  - duplicate not allowed
    const duplicate = new Array<string>(); // array - duplicate is allowed

    for (const value of optionTxt) {

        if (myset.has(value)) {
            duplicate.push(value)
        }
        else {
            myset.add(value);
        }
    }
    console.log("Duplicate Options are: " + duplicate);

    if(duplicate.length>0){
        console.log( "Duplicates are present"+ duplicate)
    }
    else{
        console.log( "Duplicates are not present"+ duplicate)
    }


  await expect(duplicate.length).toBe(0);


    // await page.waitForTimeout(3000);

})