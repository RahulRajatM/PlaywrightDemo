//go to bstackdemo.com
// select lowest to highest
// find all prices and names
// find lowest and highest price with name

import { test, expect, Locator } from '@playwright/test'

test('assighment One', async ({ page }) => {

    await page.goto("https://bstackdemo.com/");
    page.locator('.sort>select').selectOption({ value: 'lowestprice' }); // select by value ttribute
    // page.locator('.sort').selectOption('lowestprice'); // select visible text
    // page.locator('.sort').selectOption({label: 'lowestprice'}); // select by label

    //page.getByRole('combobox').selectOption({value: 'lowestprice'}); // select by value ttribute

    let allprice: string[] = await page.locator('.val>b').allTextContents();;
    let allname: string[] = await page.locator('.shelf-item__title').allTextContents();

    expect(allprice.length).toBe(25);
    expect(allname.length).toBe(25);

    const product = allname.map((name, index) => ({
        name: name.trim(),
        price: Number(allprice[index].trim())
    })); // map name-price pair

    console.log(product);


    const sortedProducts = [...product].sort(
        (a, b) => a.price - b.price
    );

    const lowest = sortedProducts[0];
    const highest = sortedProducts[sortedProducts.length - 1];

    console.log(
        `Lowest: ${lowest.name} - ${lowest.price}`
    );

    console.log(
        `Highest: ${highest.name} - ${highest.price}`
    );

    // allname= allname.map(name=> name.trim().toUpperCase());
    // allprice= allprice.map(price=>price.trim())

    // console.log(allname);
    // console.log(allprice);

    // const originalname = [...allname];
    // const originalPrice = [...allprice];

    // const sortedname = [...allname].sort();
    // const sortedPrice = [...allprice].sort();

    // console.log(sortedname);
    // console.log(sortedPrice);

    // for(let price of sortedPrice){
    //     console.log(price);
    // }

    // console.log(`Item name is ${sortedname[0]} and Lowest priice is ${sortedPrice[0]}`);
    // console.log(`Item name is ${originalname[0]} and Lowest price is ${originalPrice[0]}`);




    await page.waitForTimeout(5000);
});