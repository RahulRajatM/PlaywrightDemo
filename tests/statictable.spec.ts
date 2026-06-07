import { test, expect, Locator } from "@playwright/test";

test("static web table", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const table1: Locator = await page.locator("table[name='BookTable'] tbody");
    await expect(table1).toBeVisible();

    //1. count no. of rows in table

    //const rows:Locator= await page.locator("table[name='BookTable'] tbody tr"); //returns all rows

    const rows: Locator = table1.locator('tr'); // chaining of locator
    await expect(rows).toHaveCount(7); // 7, approach 1

    const rowCount: number = await rows.count();
    console.log('No. of rows in a table ' + rowCount);
    expect(rowCount).toBe(7);  // approach 2

    //2. count no. of headers /columns
    //table[name='BookTable'] tbody tr th

    //const columns:Locator= page.locator("table[name='BookTable'] tbody tr th");
    const columns: Locator = rows.locator("th"); // chaining of locators
    await expect(columns).toHaveCount(4); // 4

    const columnCount: number = await columns.count();
    console.log('No. of columns in a table ' + columnCount);
    expect(columnCount).toBe(4);  // approach 2

    // 3. count all data from 2nd row( index 2 means 3rd row including header)

    const secondRowCell: Locator = rows.nth(2).locator('td');

    const secondRowText: string[] = await secondRowCell.allInnerTexts();
    console.log("second row data: ", secondRowText); //[ 'Learn Java', 'Mukesh', 'Java', '500' ]
    await expect(secondRowCell).toHaveText(['Learn Java', 'Mukesh', 'Java', '500']);

    console.log("Printing second row data....");
    for (const text of secondRowText) {
        console.log(text);
    }
    console.log("Printing all Table data....");
    //4. Read all data from the table(excluding header)

    const allRow: Locator[] = await rows.all();


    for (let row of allRow.slice(1)) {  //slice(1) --skips the header row

        const data = await row.locator('td').allInnerTexts();
        console.log(data.join('\t'));
    }

    // 5. print book name where author is Mukesh
    let allAuthor: string[] = [];
    let allBook: string[] = [];
    for (let row of allRow.slice(1)) {  //slice(1) --skips the header row

        allAuthor.push(await row.locator('td').nth(1).innerText());
        allBook.push(await row.locator('td').nth(0).innerText());

    }
    console.log("====All Author====")
    console.log(allAuthor.join('\t'));
    console.log("====All Books====")
    console.log(allBook.join('\t'));

    const product = allAuthor.map((author, index) => ({
        author: author,
        book: allBook[index]

    }));

    console.log(product);

    console.log("Book written by Mukesh is: ")
    for (let i in product) {

        if (product[i].author.trim() === "Mukesh") {
            console.log(product[i].book);
        }
    } 

   /*    const MukeshBooks:string[]=[];
        for(let row of allRow.slice(1)){

         const cell= await row.locator('td').allInnerTexts();
         const author= cell[1];
         const book= cell[0];
         if(author==="Mukesh"){
            console.log(`${author} \t ${book}`);
            MukeshBooks.push(book);
         }
        }
     expect(MukeshBooks.length).toBe(2);

// calculate total price of all books

let totalPrice:number=0;
for(let row of allRow.slice(1)){

         const cell= await row.locator('td').allInnerTexts();
          const price= cell[cell.length-1];
         
          totalPrice= totalPrice+ parseInt(price);
        }

        console.log("Total Price: ", totalPrice);
        expect(totalPrice).toBe(7100);

        */
});