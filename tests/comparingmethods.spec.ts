import { test, expect, Locator } from "@playwright/test"

test(" Methods comparision", async ({ page }) => {

    await page.goto("https://demowebshop.tricentis.com/");

    const products: Locator = page.locator(".product-title"); //6

    //1. innerText() Vs textContent()

    // console.log(await products.nth(3).innerText());
    // console.log(await products.nth(3).textContent());

    const count = await products.count();

    for (let i = 0; i < count; i++) {
       
     // console.log(await products.nth(i).innerText()); // innerText()- Extracts plain text; eliminates the whitespaces and line break
       
     const productName: string | null = await products.nth(i).textContent();
     console.log(productName?.trim()); //textContent()- Extracts text including hidden elements. Including whitespaces and line breaks;
    }

//Ex.2. Difference betweeen allInnerText() Vs allTextContents()
console.log("=======allInnerText() Vs allTextContent()=============")

//const productNames:string[]= await products.allInnerTexts();
const productNames:string[]= await products.allTextContents();

console.log(productNames);

const trimmednames:string[]= productNames.map(name=>name.trim());
console.log(trimmednames);

//3. all() - converts Locator type to locator type of Array (Locator -> locator[])
// Returns an Array of Locators

 const productsLocator:Locator[]= await products.all();
 console.log(productsLocator);
 //console.log(await productsLocator[1].innerText());

 /* for - of loop
 for(let locator of productsLocator){

    console.log(await locator.innerText());
 } */

 // for in loop
for(let i in productsLocator){

    console.log(await productsLocator[i].innerText());
 }


})