import { test, expect, Locator } from "@playwright/test";
import { constants } from "node:buffer";

test("Single Select DropDown", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");


   const dropdownOp:Locator=  page.locator("#animals>option"); //sorted

   //const dropdownOp:Locator=  page.locator("#colors>option"); // not sorted
  // console.log(await dropdownOp.allTextContents());

    const optionTxt:string[]= (await dropdownOp.allTextContents()).map(text=>text.trim());


    const originalList:string[]= [...optionTxt]; // ... spread operator
    const sortedList:string[]= [...optionTxt].sort();  // sort() method is mutable in Array


    console.log('Original list: '+originalList)
    console.log('Sorted list: '+sortedList)

    expect(originalList).toEqual(sortedList);



    await page.waitForTimeout(3000);
});