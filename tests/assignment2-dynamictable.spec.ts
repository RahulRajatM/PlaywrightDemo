// https://testautomationpractice.blogspot.com/

import { test, expect, Locator } from "@playwright/test";
import { text } from "node:stream/consumers";

// 
test("Varify CPU load of Chrome process", async ({ page }) => {

   await page.goto("https://testautomationpractice.blogspot.com/");
   const rows: Locator[] = await page.locator('#rows tr').all();

   //print all rows data
   let cpuChromeProcessInTable: string = '';
   for (let row of rows) {
      const name = await row.locator('td').nth(0).innerText();
      // console.log("Name: ", name);
      if (name === 'Chrome') {
         cpuChromeProcessInTable = await row.locator("td:has-text('%')").innerText();
         //const cupLoad= await  row.locator("ts").filter({hasText:'%'}).innerText();
         // console.log("CUP LOAD OF CHROME: ", cpuChromeProcessInTable);
         break;
      }
   }

   const cpuChromeProcessInRed: string = await page.locator("strong.chrome-cpu").innerText();
   expect(cpuChromeProcessInTable).toEqual(cpuChromeProcessInRed);
})

test.only("Varify Disk Space of Firefox process", async ({ page }) => {

   await page.goto("https://testautomationpractice.blogspot.com/");
   const rows: Locator[] = await page.locator('#rows tr').all();

   //print all rows data
   let firefoxDiskInTable: string = '';
   for (let row of rows) {
      const name = await row.locator('td').nth(0).innerText();
      // console.log("Name: ", name);
      if (name === 'Firefox') {
         //  firefoxDiskInTable = await row.locator("td:has-text('MB/s')").innerText();
          firefoxDiskInTable = await row.locator("td").filter({ hasText: 'MB/s' }).innerText();
         console.log("Firefox Disk In Table: ", firefoxDiskInTable);
         break;
      }
   }
   await page.waitForTimeout(10000);
   const FirefoxDiskInPurple: string = await page.locator("strong[class='firefox-disk']").innerText();
   console.log("Firefox Disk In Purple: ", FirefoxDiskInPurple)
   await expect(firefoxDiskInTable).toEqual(FirefoxDiskInPurple);
})