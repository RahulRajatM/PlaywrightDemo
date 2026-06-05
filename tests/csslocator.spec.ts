/* 
CSS - cascading style sheets 

html + JS + CSS 

1. tag with id => tag#id
2. tag with class => tag.class
3. tag with any other attribute  => tag[attribute= value] or [attribute=value]
4. tag with class and attribute => tag.class[attribute=value] oe .class[attribute = value]
*/

import {test, expect} from "@playwright/test";

test("CSS locator Demo", async ({page})=>{

   await page.goto("https://www.w3schools.com/html/html_tables.asp");

   await expect(page.locator("input#tnb-google-search-input")).toBeVisible();
   await page.locator("input#tnb-google-search-input").fill('Test');
  // page.keyboard.press('Enter');

  ////span.button-text

    await expect(page.locator("span.button-text")).toBeVisible();
   await page.locator("span.button-text").click();

   //input.search-box-text[value="Search store"]
   
   await page.waitForTimeout(5000);\

   // Absolute CSS path
   // html>head>title
   //html>body>div>h1

   //html>body>div:nth-child(2)>h1
   //html>body>div:first-child
   //html>body>div:last-child

   //css for start wilh ^
   // p[id^= pa]

   //cc for end with $
   //p[class$= main]

   // css for contains *
   //p[class*=main]

// not operator in css - negation

// p[id='para1']: not([class= 'mainn']) // first locator matching but 2nd not matching

//p:not([id='para1'])[class= 'mainn']

//p:not([id='para1']):not([class= 'mainn'])

// + Operator for immediate siblings in CSS
// p[id='para1']+p
//p[id='para1']+*
});