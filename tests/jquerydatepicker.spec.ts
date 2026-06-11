import { test, expect, Locator, Page } from "@playwright/test";


async function selectDate(tyear: string, tmonth: string, tdate: string, page: Page, isFuture: boolean): Promise<void> {

    while (true) {

        const currentMonth = await page.locator(".ui-datepicker-month").textContent();
        const currentYear = await page.locator(".ui-datepicker-year").textContent();

        if (currentMonth === tmonth && currentYear === tyear) {
            break;
        } else {
            if (isFuture) {
                //future date
                await page.locator(".ui-icon.ui-icon-circle-triangle-e").click();
            } else {
                //past date
                await page.locator(".ui-icon.ui-icon-circle-triangle-w").click();
            }

        }
    }
    const allDay = await page.locator(".ui-datepicker-calendar a").all();
    for (let d of allDay) {
        const currentDay = await d.innerText();
        if (currentDay === tdate) {
            await d.click();
            break;
        }
    }


}







test("J Query Date Picker", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const dateInput: Locator = page.locator("input#datepicker");
    await expect(dateInput).toBeVisible();

    //Approach 1- using fill() method
    await dateInput.fill("06/11/2026");  //mm/dd/yyyy

    // Approach 2. Using date picker
    await dateInput.click();

    //select target date
    const year = "2028";
    const month = "May";
    const day = "12";
    const expectedDate = `05/${day}/${year}`;  // mm/dd/yyyy

    selectDate(year, month, day, page, true);

    expect(dateInput).toHaveValue(expectedDate);
    /*
        while (true) {
    
            const currentMonth = await page.locator(".ui-datepicker-month").textContent();
            const currentYear = await page.locator(".ui-datepicker-year").textContent();
    
            if (currentMonth === month && currentYear === year) {
                const allDay = await page.locator(".ui-datepicker-calendar a").all();
                for (let d of allDay) {
                    const currentDay = await d.innerText();
    
                    if (currentDay === day) {
                       await d.click();
                        break;
                    }
                }
                break;
            } else {
    
                //future date
               // await page.locator(".ui-icon.ui-icon-circle-triangle-e").click();
    
                //past date
                await page.locator(".ui-icon.ui-icon-circle-triangle-w").click();
                
            }
        }
    */




    await page.waitForTimeout(5000);

})