// alert(), confirm(), prompt() dialog/jSalerts
/*By default, dialogs are auto-dismissed by Playwright, so you don't have to handle them. However, you can register a dialog handler before the action that triggers the dialog to either dialog.accept() or dialog.dismiss() it.

page.on('dialog', dialog => dialog.accept());
await page.getByRole('button').click();
*/

import { test, expect, Locator } from "@playwright/test";

test("Simple dialog/alert", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    //Enable/register a dialog handler
    page.on('dialog', (dialog) => {
        console.log("Type of Dialog is: ", dialog.type()); // return type of dialog
        expect(dialog.type()).toContain('alert');

        console.log("Dialog text: ", dialog.message()); // return message from dialog
        expect(dialog.message()).toContain("I am an alert box");

        dialog.accept();
    });

    await page.locator("button#alertBtn").first().click(); //opens dialog
    // await page.waitForTimeout(5000);
});

test("Confirmation dialog/alert", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    //Enable/register a dialog handler
    page.on('dialog', (dialog) => {
        console.log("Type of Dialog is: ", dialog.type()); // return type of dialog
        expect(dialog.type()).toContain('confirm');

        console.log("Dialog text: ", dialog.message()); // return message from dialog
        expect(dialog.message()).toContain("Press a button!");

        dialog.accept(); // close the dialog by accepting
        // dialog.dismiss(); // close the dialog by dismissing
    });

    await page.locator("#confirmBtn").first().click(); //opens confirmation dialog
    const msg: string = await page.locator('#demo').innerText();
    // expect(msg).toBe('You pressed Cancel!')
    expect(msg).toBe('You pressed OK!')
    // await page.waitForTimeout(5000);

})

test.only("Prompt dialog/alert", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    //Enable/register a dialog handler
    page.on('dialog', (dialog) => {
        console.log("Type of Dialog is: ", dialog.type()); // return type of dialog
        expect(dialog.type()).toContain('prompt');

        console.log("Dialog text: ", dialog.message()); // return message from dialog
        expect(dialog.message()).toContain("Please enter your name:");
        const value = dialog.defaultValue();
        expect(value).toContain('Harry Potter');

        dialog.accept("Rahul"); // close the dialog by accepting
        // dialog.dismiss(); // close the dialog by dismissing
    });

    await page.locator("#promptBtn").first().click(); //opens propt dialog

    const msg: string = await page.locator('#demo').innerText();
    console.log("Message: ", msg)

    // expect(msg).toBe('You pressed Cancel!')
    expect(msg).toContain('Rahul');
    await page.waitForTimeout(5000);

})