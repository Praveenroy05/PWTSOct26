/*

1. Launch the url
2. Identify the element which expect to upload the file
3. Use setInputFiles("pathOfTheFile") to upload the file on an element

*/

import {test, expect} from '@playwright/test'

test("Handling File Upload", async ({page})=>{
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")

    // setInputFiles(["path of the file", "path of the file1"])
    // testdata/AILLM.jpg
    // testdata/AILLM1.jpg

    await page.locator("#filesToUpload").setInputFiles
    (["testdata/AILLM.jpg", "testdata/AILLM1.jpg"])
    
    await expect(page.locator("#fileList li").first()).toHaveText("AILLM.jpg")
    await expect(page.locator("#fileList li").last()).toHaveText("AILLM1.jpg")


})