// click - click()
// double click - dblclick()
// right click - click()
// Mouse hover - hover()
// scrolling - scrollIntoViewIfNeeded()
// drag and drop 

import {test, expect} from '@playwright/test'

test("Handling double click and right click", async ({page})=>{
    await page.goto("https://demo.guru99.com/test/simple_context_menu.html")

    await page.getByText("Double-Click Me To See Alert", {exact:true}).dblclick()

    await page.getByText("right click me", {exact:true}).click({button: "right"})

    await page.waitForTimeout(2000)

    await page.getByText("Paste", {exact:true}).click()

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.getByText("Copy Text").dblclick()

    await expect(page.locator("#field2")).toHaveValue("Hello World!")

    // Note: Playwright auto handles the alert/popup/dialog event

})


test("Handling scrolling on the page", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.getByText("Download Files", {exact:true}).scrollIntoViewIfNeeded()
    await page.getByText("Download Files", {exact:true}).click()
    await page.locator("#input2").fill("Testing")

    await page.locator("#inputText").fill("Scroll Up")
    await expect(page.locator("#inputText")).toHaveValue("Scroll Up")

    // Note: Playwright by default perform scolling on the page

})

test("Handling mouse over on an element", async ({page})=>{
    await page.goto("https://www.spicejet.com/")
    await page.getByText("Travel Policies").hover()
    await expect(page.getByTestId("test-id-Baggage Information")).toHaveText("Baggage Information")
})


// drag and drop 
// drop down

