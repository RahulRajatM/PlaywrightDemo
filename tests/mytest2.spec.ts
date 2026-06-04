import {test, expect} from "@playwright/test";


//syntax of test:
/*
test("title", ()=>{

    // step1
    // step2
    // step3
}) */

    //fixture- global variables, ex; page, browser, context, etc. are called fixtures in playwright. 
    // we can use them in our test by passing them as parameters in the test function.
 
    test("verify page title", async ({page})=>{
     
    // step1- navigate to the url
   await  page.goto("https://www.google.com/"); 

    let url:string= await page.url();
    console.log("URL of the page is: "+ url);

    // step2- verify the title of the page
   await  expect(page).toHaveURL("https://www.google.com/");   

    })