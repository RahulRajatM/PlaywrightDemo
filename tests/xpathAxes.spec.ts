import {test, expect, Locator} from "@playwright/test"

test("Xpath Axes Demo", async ({page})=>{

   await page.goto("https://www.w3schools.com/html/html_tables.asp")

    ////td[normalize-space()= 'Germany']/self::td 

  // const text: string|null = await page.locator("//td[normalize-space()= 'Germany']/self::td").textContent();
//   console.log(`Text is = ${text}`);
//    await expect(text).toBe('Germany');
 
  const text:Locator = page.locator("//td[normalize-space()= 'Germany']/self::td");
  await expect(text).toHaveText('Germany');

  console.log("============= Parent =========");
  
   ////td[normalize-space()= 'Germany']/parent::tr
   const parent:Locator = page.locator("//td[normalize-space()= 'Germany']/parent::tr");
   await expect(parent).toContainText("Maria Anders");
   console.log(await parent.textContent());

   console.log("============= Child =========")

   // //table[@id='customers']//tr[2]/child::td
   const secondRow:Locator = page.locator("//table[@id='customers']//tr[2]/child::td");
   await expect(secondRow).toHaveCount(3);

   console.log("============= Ancestor =========")

   ////td[text()='UK']/ancestor::table
   const ancestor:Locator = page.locator("//td[text()='UK']/ancestor::table");
 await expect(ancestor).toHaveAttribute('id', 'customers');

 console.log("============= descendant =========")

 ////table[@id='customers']/descendant::td
 const descendant:Locator = page.locator("//table[@id='customers']/descendant::td");
 await expect(descendant).toHaveCount(18);

 console.log("============= following =========")

 ////td[text()='Austria']/following::td[1]
 const following:Locator = page.locator("//td[text()='Austria']/following::td[1]");
 await expect(following).toHaveText('Island Trading');


 console.log("============= following-sibling =========")

 ////td[text()='Ernst Handel']/following-sibling::td
const followingSibling:Locator = page.locator("//td[text()='Ernst Handel']/following-sibling::td");
 await expect(followingSibling).toHaveCount(2);

 console.log("============= preceding-sibling =========")

 //////td[text()='Austria']/preceding-sibling::*

const precedingSibling:Locator = page.locator("//td[text()='Austria']/preceding-sibling::td");
 await expect(precedingSibling.first()).toHaveText("Ernst Handel");
 await expect(precedingSibling.last()).toHaveText("Roland Mendel");
})
