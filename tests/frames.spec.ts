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