import {test, expect} from '@playwright/test'

test("Login into application", async ({page})=>{

    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.getByRole("textbox", {name:'Username'}).fill("student")
    await page.locator("#password").fill("Password123")
    await page.getByRole("button", {name:'Submit'}).first().click()
    await expect(page.locator("h1.post-title")).toHaveText("Logged In Successfully")

})

// first() - first metching element out of all the matching
// last() - last matching element out of all the matching
// nth(index) - It matches the indexed element - index starts with 0
// nth(0) - first matching element out of all the matching

// JS & TS - asynchronus
// async-await
// async - function
// await - each line of code

// async-await  - To make the script to execute in a 
// synchronous order - step by step
// Promise - pending, rejected, successful

// Locators
// Css selector , xpath, Playwright getBy locators

