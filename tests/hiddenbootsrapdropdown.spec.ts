import {test, expect, Locator} from "@playwright/test"

test("boootstrap hidden dropdown", async ({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.locator("[placeholder='Username']").fill("Admin");
    await page.locator("[placeholder='Password']").fill("admin123");
    await page.locator("[type='submit']").click()

 await page.getByText("PIM").click()

 await page.locator("form i").nth(2).click();  // ctrl+shift+p --> emulate focused page
 await page.waitForTimeout(3000); 

 //capture all the options from dropdown
  const options:Locator =await page.locator("div[role='listbox'] span")
   
  const count= await options.count();
  console.log("No. of options: "+count);

  console.log("All Options: "+ options.allTextContents());

  for(let i=0; i<count;i++){
    //const text= options.nth(i).textContent();
    const text= await options.nth(i).innerText();
    console.log(text);
    if(text.trim()==='Automaton Tester'){
       await options.nth(i).click();
        break;
    }
  }
 
    await page.waitForTimeout(5000);
})