import {test, expect} from '@playwright/test'

test("Login into application using valid credentials", async ({page})=>{

    // Goto the url
    // Fill the username
    // Fill the password
    // Click on Submit button
    // Validate if the dashboard page is visible or not


    // goto(url:string) - It helps us in launching the url on the given browser
    // url should consists of http/https
    // fill("string") - Set the value inside the input field


    await page.goto("https://practicetestautomation.com/practice-test-login/")
    // await page.locator("input#username").fill("student")
    // await page.getByRole("textbox", {name: 'Username'}).fill("student")
    await page.getByLabel("Username").fill("student")

    // toHaveValue("value") - Checks if an INPUT field is having the value as "value" 
    await expect(page.getByLabel("Username")).toHaveValue("student")

    // pressSequentially("string") - Set the value inside the INPUT filed but character
    // by character
    await page.locator("#password").pressSequentially("Password123")

    await page.getByRole("button", {name:'Submit'}).click()

    // 1. There should be an element on the page which should have a text value as " Logged In Successfully"
    // 2. Logout link should be visible on the page
    // 3. There should be an element on the page which should contains a text value as "Congratulations student"

    // toHaveText("string") - It validates if the element has "string" as a text value
    await expect(page.locator("h1.post-title")).toHaveText("Logged In Successfully")

    // toContainText("partial string") - It validates if the element contains "partial string" as a text value
    await expect(page.locator("div.post-content strong")).toContainText("Congratulations student")

    // toBeVisible() - If the lement is visible on the page or not
    await expect(page.getByRole("link", {name:'Log out'})).toBeVisible()

})