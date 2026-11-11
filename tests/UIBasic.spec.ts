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

test("Handling radio button and checkbox", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    // click() - Click on an element
    // check() - It validates if the element is already checked, if it is not selected
    // then it click on an element. Only works for Radio button or checkbox element

    // uncheck() - It validates if the element is not already checked, if it is checked 
    // then only it clicks on an element.

    // toBeChecked() - 

    await page.getByRole("radio", {name:'Female'}).check()
    await expect(page.getByRole("radio", {name:'Female'})).toBeChecked()

    await page.locator("#wednesday").check()
    await expect(page.locator("#wednesday")).toBeChecked()
    await page.locator("#wednesday").uncheck()
    await expect(page.locator("#wednesday")).not.toBeChecked()

    // Assignment - Click on all checkbox

})

test("Get the text value from an element", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    // textContent() - Return the text value of an element even if the element is not
    // visible on the page

    // innerText() - Return the text value ONLY from the visible element on the page
    
    const text  = await page.locator("h1.title").innerText()
    await expect(text).toContain("Automation Testing Practice")
    console.log(text)

    // allTextContents()
    // allInnerTexts()

    const allTexts = await page.locator("h2.title").allTextContents()
    console.log(allTexts)
     
})