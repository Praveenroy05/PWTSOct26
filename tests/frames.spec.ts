// Frames

/*

Helping us in integrating one html page to another html 
page by using tag <iframe>

<html> - page.goto("")
....
.... page.locator()
....
    <iframe> - const framePage = page.frameLocator("")
        <html>
        .....
        ..... - framePage.locator("")
        .....

            <iframe> - Nested Frames - const nestedFrames = framePage.frameLocator()
                <html> 
                ......
                ...... nestedFrames.locator("")
                ......
                </html>
            </iframe>

        
        </html>
    </iframe>


</html>



*/

import {test, expect} from '@playwright/test'

test("Frames handling", async ({page})=>{
    await page.goto("https://demo.automationtesting.in/Frames.html")

    // frameLocator() - Which helps us in entering inside the iframe to 
    // select the elements

    const framePage = page.frameLocator("#singleframe")

    await framePage.locator("input[type='text']").first().fill("Testing")
    await expect(framePage.locator("input[type='text']").first()).toHaveValue("Testing")

    await page.getByText("Iframe with in an Iframe", {exact:true}).click()

    const outerFrame = page.frameLocator("#Multiple iframe")
    const innerFrame = outerFrame.frameLocator(".iframe-container iframe")

    await innerFrame.locator("input[type='text']").first().fill("Nested Frame")
    await expect(innerFrame.locator("input[type='text']").first()).toHaveValue("Nested Frame")

    await page.getByText("Home", {exact:true}).click()
    await expect(page.getByPlaceholder("Email id for Sign Up")).toBeVisible()
})