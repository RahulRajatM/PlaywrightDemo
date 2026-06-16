// https://the-internet.herokuapp.com/basic_auth

/*
https://username:password@the-internet.herokuapp.com/basic_auth
*/
import { test, expect, chromium } from "@playwright/test";


test("Authentication Popup", async () => {

    const browser = await chromium.launch(); //create browser
    const context = await browser.newContext({httpCredentials:{username:'admin', password:'admin'}}); //create context

    //creating 1 pages
    const page = await context.newPage();

    //Approch 1
 /*   await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth");
    await expect(page.locator('p:has-text("Congratulations! You must have the proper credentials.")')).toBeVisible();
    await page.waitForLoadState(); // wait for page load completely
    await page.waitForTimeout(5000);
*/
     await page.goto("https://the-internet.herokuapp.com/basic_auth");
    await expect(page.locator('p:has-text("Congratulations! You must have the proper credentials.")')).toBeVisible();
    await page.waitForTimeout(5000);


})