//go to bstackdemo.com
// select lowest to highest
// find all prices and names
// find lowest and highest price with name

import {test, expect, Locator} from '@playwright/test';

test("Assignment 1 practice", async ({page})=>{

   await page.goto("https://bstackdemo.com/");
await page.locator('.sort>select').selectOption({value: 'lowestprice'});

  const allName= await page.locator('shelf-item__title').allTextContents();

const allPrice= await page.locator('.val > b').allTextContents();

//   console.log(allName);
//   console.log(allPrice);

const product= allName.map((name,index)=> ({
    name:name.trim(),
    price: Number(allPrice[index].trim())
    
}));

const sortedProduct= [...product].sort(
    (a, b)=> a.price - b.price
);

const lowest= sortedProduct[0];
const highest= sortedProduct[sortedProduct.length-1]


console.log("Lowest: "+lowest);
console.log("Highest: "+highest);

  await page.waitForTimeout(3000);

})
