
import { test, expect, Locator } from "@playwright/test";

//https://playwright.dev/docs/input
//https://testautomationpractice.blogspot.com/

// Text Input/ Text Box

test('Text input Actions', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const textbox: Locator = page.locator("#name");
    await expect(textbox).toBeVisible();
    await expect(textbox).toBeEnabled();

    const maxLen: string | null = await textbox.getAttribute('maxlength'); // Return the value of maxlength attribute of the element

    expect(maxLen).toBe("15");

    await textbox.fill("Rahul");

    let enteredValue = await textbox.inputValue();  // Returns the input value of text box
    console.log("Entered Value: " + enteredValue)

    expect(enteredValue).toBe("Rahul");

    await page.waitForTimeout(3000);

});

test('radio button Actions', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const maleRadio: Locator = page.locator("#male");
    await expect(maleRadio).toBeVisible();
    await expect(maleRadio).toBeEnabled();

    expect(await maleRadio.isChecked()).toBe(false);

    await maleRadio.check(); // select radio button
    //expect(await maleRadio.isChecked()).toBe(true)
    expect(maleRadio).toBeChecked();

    await page.waitForTimeout(3000);

});

test.only('Check Box Actions', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    // select specific checkbox by using checkBylabel and asset
    const sundayCheckbox: Locator = page.getByLabel('Sunday');
    // await  sundayCheckbox.check();
    //  await expect(sundayCheckbox).toBeChecked();


    // select all checkboxes and assert each is checked

    const days: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const checkBoxes: Locator[] = days.map(index => page.getByLabel(index));
    expect(checkBoxes.length).toBe(7);

    // select all the checkboxes

    /*for(let checkbox of days){
   
      const currentCheckbox:Locator=  page.getByLabel(checkbox);
      await currentCheckbox.check();
      await expect(currentCheckbox).toBeChecked();
     }
      */

    // for (let checkbox of checkBoxes) {
    //     await checkbox.check();
    //     await expect(checkbox).toBeChecked();
    // }

  //  await page.waitForTimeout(2000);
    // Uncheck last 3 checkboxes and assert
    // for (let checkbox of checkBoxes.slice(-3)) {
    //     await checkbox.uncheck();
    //     await expect(checkbox).not.toBeChecked();
    // }

   // await page.waitForTimeout(5000);


    // Toggle checkboxes: If checked, uncheck, if unchecked, check. Assert state flipped

    // for (let checkbox of checkBoxes) {

    //     if (await checkbox.isChecked()) {
    //         // only if checked
    //         await checkbox.uncheck();
    //         await expect(checkbox).not.toBeChecked()
    //     }
    //     else {
    //         //only if not checked
    //         await checkbox.check();
    //         await expect(checkbox).toBeChecked();
    //     }

    // }
    //await page.waitForTimeout(3000);

    // Randomly select check boxes- select checkboxes by index (1,3,6) and assert
    //const checkBoxes: Locator[] = days.map(index => page.getByLabel(index)); 
    const indexes:number[]= [1, 3,6];

    //   for(let index of indexes){
    //  await checkBoxes[index].check();
    //  await expect(checkBoxes[index]).toBeChecked();
    //   }
       await page.waitForTimeout(3000);

       //Select the checkbox based on the Label
 const day:string= 'Friday';
  for(const label of days){
if(label===day){
    const checkbox= page.getByLabel(day);
    checkbox.check();
    await expect(checkbox).toBeChecked();
}
  }

  await page.waitForTimeout(3000);
});