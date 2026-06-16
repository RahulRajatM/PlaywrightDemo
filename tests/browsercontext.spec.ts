import { test, expect, Page, BrowserContext, chromium, Browser, firefox, webkit } from "@playwright/test";

// browser ----> context --> pages
// Browser ---> chromium, firefox, webkit

// context--> we can have multiple context for multiple users/apps for same browser
// provide a way to operate multiple independent browser sessions.
// page ----> New Tab, Window, Popup

test("browser context demo", async () => {

    const browser: Browser = await chromium.launch(); //create browser
    const context: BrowserContext = await browser.newContext(); //create context

    //creating 2 pages
    const page1: Page = await context.newPage();
    const page2: Page = await context.newPage();
    // how many pages created
    console.log("No. of pages created: ", context.pages().length);

    await page1.goto("https://playwright.dev/");
    await expect(page1).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright")

    await page2.goto("https://selenium.dev/");
    await expect(page2).toHaveTitle("Selenium");

    //   await page.goto("https://testautomationpractice.blogspot.com/");

    await page1.waitForTimeout(5000);
    await page2.waitForTimeout(5000);


})