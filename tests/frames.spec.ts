import { test, expect, Locator, Frame } from "@playwright/test";

// An iframe (inline frame) is an html element that allows you to embed another html document within the current document
// Iframes are usually used to embed external content such as video, maps, or other web pages

test("Frame Demo", async ({ page }) => {

    await page.goto("https://demoqa.com/nestedframes");
  //  await page.goto("https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame");
    //await page.goto("https://ui.vision/demo/webtest/frames/");

    //Total no. of iframes
    const frames: Frame[] = page.frames();
    console.log("No. of iframe: ", frames.length);

    //Approach 1 - using page.frame();
    const frame: Frame | null = page.frame({ url: "https://www.globalsqa.com/trainings/" });

    if (frame) {
        await frame.locator("#s").fill("Hello")
        // await frame.fill("#s", "Hello")
    } else {
     //   console.log("Frame is not available");
    }

    //Approach 2- using framelocator()

    const parentFrame = await page.frameLocator("#frame1").locator('body').innerText();
    console.log(parentFrame);

    await page.waitForTimeout(5000);

});

test.only("Inner/Child Frame Demo", async ({ page }) => {

   // await page.goto("https://demoqa.com/nestedframes");
    await page.goto("https://the-internet.herokuapp.com/nested_frames");


    const parentFrame = page.frame({url:'https://the-internet.herokuapp.com/frame_top'});

    if(parentFrame){

    }

  //  parentFrame.locator('')
    console.log(parentFrame);

    await page.waitForTimeout(5000);

});