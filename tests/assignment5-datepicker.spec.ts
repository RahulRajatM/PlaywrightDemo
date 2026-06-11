// https://testautomationpractice.blogspot.com/


import { test, expect, Locator } from "@playwright/test";

test("Select date 05/12/2027 Date Picker 1 (mm/dd/yyyy)", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.locator("input#datepicker").click();

    const nextButton: Locator = page.locator("a[data-handler='next']");

    const day: string = '12';
    const month: string = 'May';
    const year: string = '2027';

    let nextDate = true;
    while (nextDate) {

        // const currentDayLocator: Locator = page.locator(".ui-datepicker-calendar td a");
        // const currentDay: string = await currentDayLocator.innerText();
        const currentMonth: string = await page.locator(".ui-datepicker-month").innerText();
        const currentYear: string = await page.locator(".ui-datepicker-year").innerText();

        if (currentMonth === month && currentYear === year) {

            const currentDayLocator: Locator[] = await page.locator(".ui-datepicker-calendar td a").all();
            for (let d of currentDayLocator) {

                const currentDay: string = await d.innerText();
                if (currentDay === day) {
                    await d.click();
                    nextDate = false;
                }
            }

        } else {

            await nextButton.click();
        }
    }
    await page.waitForTimeout(5000);

})