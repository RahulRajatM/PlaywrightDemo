import { Locator, test, expect } from "@playwright/test";

test("Xpath Demo in Playwright", async ({page})=>{

    await page.goto("https://demowebshop.tricentis.com/camera-photo");

//Absolute Xpath
//const logo1:Locator= page.locator("/html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/a[1]/img[1]");

const logo1:Locator= page.locator("xpath= /html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/a[1]/img[1]");
  expect(logo1).toBeVisible;

//Relative Xpath
const logo2:Locator= page.locator("//img[@alt='Tricentis Demo Web Shop']");
  expect(logo2).toBeVisible;

  // xpath with contains() function

await page.goto("https://demowebshop.tricentis.com/");

 const computers:Locator =page.locator("//a[contains(@href, 'computer')]");

 const computersCount:number= await computers.count();
 console.log(computersCount);

 expect(computersCount).toBeGreaterThan(10);

 //console.log(await computers.textContent()) // Error: Strict mode Voilation error, when a locators matches with more than one element and you try to perform some action

console.log('First computer: '+ await computers.first().textContent()); // get one text value

console.log('Last computer: '+ await computers.last().textContent());

console.log('nth computer: '+ await computers.nth(5).textContent()); // Index start from Zero

console.log("===========All computer related products ===============")
 let productTitle: string[]= await computers.allTextContents() // getting all the matching products in an array- get all test value

 for(let product of productTitle){
    console.log(product)
 }

 console.log("================starts-with() in xpath=================================")


 let buildingProduct:Locator= page.locator("//a[starts-with(@href,'/build')]");

// await expect(buildingProduct).toBeVisible();
let count1:number=  await buildingProduct.count();
console.log(count1);

// last() and [posstion()=n] in Xpath
// //div[@class='column follow-us']/ul/li[last()]
// //div[@class='column follow-us']/ul/li[position()=5]


})