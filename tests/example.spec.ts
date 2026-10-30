// test() - This helps is in writing the test case
// expect() - This helps us in writing the assertion

import {test, expect} from '@playwright/test'


// fixture - Global object in playwright which perfrom some setup and tear down process

// page - it is an object of a Page class, which identifies a single page on the browser
// browser - It identifies the complete browser. it can have multiple pages on the browser
// context - Instance of a browser
// request - This is for API testing

test("Login into application", async function({page}){
// page - Will auto launch the browser and create a single page on the browser
  await page.goto("https://practicetestautomation.com/practice-test-login/")
})

test("Login into application1", async ({browser})=>{
// browser - Will not auto lauch the browser. To laucnh the borwser and 
// create a page on the browser we need to follow the below:
  const context = await browser.newContext() // Creates a new browser context.
  const page = await context.newPage()
  const page1 = await context.newPage()
  const page2 = await context.newPage()

  await page.goto("https://practicetestautomation.com/practice-test-login/")
  await page1.goto("https://practicetestautomation.com/practice-test-login/")
  await page2.goto("https://practicetestautomation.com/practice-test-login/")

  await page.waitForTimeout(5000)
  
})

// Note: 
// 1. page fixture by default will launch the browser and create a new page on the browser
// but browser fixture will not auto launch the browser

// 2. By using a page fixture you will only have access to a single page on the browser whereas
// by using a browser fixture you can create multiple pages as well

// 3. page fixture will not be available inside beforeAll hooks, whereas browser fixture 
// will be also be available inside beforeAll hooks.
