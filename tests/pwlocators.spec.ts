/* 
Locator- Identifies the element on the page. Playwright provides a powerful set of locator methods to find elements based on various attributes and properties. Some of the commonly used locator methods include:
DOM- Document Object Model, it is a programming interface for web documents. It represents the structure of a web page as a tree of objects, allowing developers to interact with and manipulate the content and structure of the page using JavaScript.
DOM is a API Interface provided by the browser to interact with the HTML and XML documents. It allows developers to access and manipulate the elements, attributes, and content of a web page dynamically.

page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
All of the above locators have built-in auto-waiting and retry-ability. They will wait for the element to be present in the DOM, visible, and stable before performing any action. If the element is not found, they will retry until a timeout is reached.
*/ 

import {test, expect, Locator, Browser} from "@playwright/test";

test("demo of locators", async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/");


 // 1. page.getByAltText() - identifies images ( and similar elements) by their alt attribute.
 // Use this locator when your element has an 'alt' attribute that describes the content of the image. This is particularly useful for images, as the alt text provides a textual description of the image content, which can be used for accessibility purposes and for locating the element in tests.

 const logo:Locator =  page.getByAltText("All-Access Membership Badge");
    await expect(logo).toBeVisible();


    //2. getByText() - Find an element by its text content. 
    // This locator is useful when you want to locate an element based on the visible text it contains. 
    // It can be used for any element that has text content, such as buttons, links, headings, etc.
    // generally use it for non-interactive elements like div, span, p, etc. but it can be used for interactive elements as well.
     

// const text:Locator= page.getByText("Welcome to our store");
//  await expect(text).toBeVisible();

 await expect(page.getByText("Ready to Transform Your")).toBeVisible();

 await expect(page.getByText(/Ready\s+to\s+transform\s+Your/i)).toBeVisible(); // getByText() use full string, partial string or regex to locate the element. It is case sensitive by default, but you can use regex with the 'i' flag to make it case insensitive.

//3. page.getByRole() - Loacting by Role (role is not an attribute)
/* Role locator include buttons, checkboxes, headings, links, lists, tables, and many more
https://playwright.dev/docs/locators#locate-by-role
https://www.w3.org/TR/wai-aria-1.2/#role_definitions

*/

await page.getByRole("link", {name: 'Sign Up'}).nth(1).click();

//This switched to new tab, need to fix it, this is just a work-around
await page.goto("https://sso.teachable.com/secure/9521/identity/sign_up")

await expect(page.getByRole('heading', {name: 'Sign Up'})).toBeVisible();

//4. page.getByLable()- Idea for fields with visible label

//await page.getByLabel("Full name").type("Rahul"); //type is deprecated

//await page.getByLabel("Full name").fill("Rahul"); // need to fix

//5. page.getByPlaceHolder()- finds elements with the given placeholder text
await page.getByPlaceholder("your name").fill("Rahul"); 


// 6. page.getByTitle() - used to locate an element by 'title' attribute

// 7. page.getByTestId-  We can use this locator to find element base on 'data-testid' atribute

});