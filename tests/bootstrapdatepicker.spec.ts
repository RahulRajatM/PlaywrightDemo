import { test, expect, Locator, Page } from "@playwright/test";



async function startDate(checkinYear: string, checkinMonth: string, checkinDate: string, page: Page) {
    while (true) {
        const checkinMonthYear = await page.locator("h3[id^='bui-calendar-month-']").first().innerText();
        const cMonth = checkinMonthYear.split(" ")[0];
        const cYear = checkinMonthYear.split(" ")[1];

        if (checkinMonth === cMonth && checkinYear === cYear) {
            break;
        }
        else {
            await page.locator("button[aria-label='Next month']").click();
        }
    }
    ///select specific date
    const allDate: Locator[] = await page.locator("[aria-labelledby^='bui-calendar-month-']").first().locator("td span").all();

    for (let d of allDate) {

        const cDate: string | null = await d.getAttribute('aria-label');

        if (cDate?.includes(checkinDate)) {
            await d.click();
            break;
        }
    }
}

async function endDate(checkoutYear: string, checkoutMonth: string, checkoutDate: string, page: Page) {
    while (true) {
        const checkinMonthYear = await page.locator("h3[id^='bui-calendar-month-']").first().innerText();
        const cMonth = checkinMonthYear.split(" ")[0];
        const cYear = checkinMonthYear.split(" ")[1];

        if (checkoutMonth === cMonth && checkoutYear === cYear) {
            break;
        } else {
            await page.locator("button[aria-label='Next month']").click();
        }
    }
    ///select specific date
    const allDate: Locator[] = await page.locator("[aria-labelledby^='bui-calendar-month-']").first().locator("td span").all();

    for (let d of allDate) {

        const cDate: string | null = await d.getAttribute('aria-label');

        if (cDate?.includes(checkoutDate)) {
            await d.click();
            break;
        }
    }
}

test("J Query Date Picker", async ({ page }) => {

    await page.goto("https://booking.com/");

    // page.on("dialog",dialog=>dialog.dismiss());
    await page.locator("[aria-label='Dismiss sign-in info.']").click(); // close signin pop-up

    //const dateSelection: Locator =
    await page.locator("[data-testid='searchbox-dates-container']").click();
    //await expect(dateSelection).toBeVisible();
    //await dateSelection.click();

    //select target date
    // const checkinYear = "2027";
    // const checkinMonth = "May";
    // const checkinDate = "12";
    // const expectedDate = `05/${checkinDate}/${checkinYear}`;  // mm/dd/yyyy
    await startDate('2027', 'May', '12', page);

    await endDate('2027', 'May', '20', page);


});

