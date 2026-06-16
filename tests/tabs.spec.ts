import { test, expect, chromium } from "@playwright/test";


test("Handle tabs", async () => {

    const browser = await chromium.launch(); //create browser
    const context = await browser.newContext(); //create context

    //creating 1 pages
    const parentPage = await context.newPage();
    await parentPage.goto("https://testautomationpractice.blogspot.com/");

// 2 statement should go parallely
    // context.waitForEvent('page');  //pending, fulfilled, reject
    // parentPage.locator("button:has-text('New Tab')").click();  //opens a new tab

  const [childPage]= await Promise.all([context.waitForEvent('page'), parentPage.locator("button:has-text('New Tab')").click()]);
    
   // Approach 1: switch between pages and get title (using context)
   const pages= context.pages();
   console.log("No. of pages created: ",pages.length);

   console.log("Title of the parent page: ",await pages[0].title());
   console.log("Title of the child page: ",await pages[1].title())

   //Approach 2: Alternative
   console.log("Title of the parent page: ",await parentPage.title());
   console.log("Title of the child page: ",await childPage.title())



    await parentPage.waitForTimeout(5000);


})