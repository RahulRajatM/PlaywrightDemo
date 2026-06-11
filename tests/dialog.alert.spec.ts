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





    await page.waitForTimeout(5000);


})