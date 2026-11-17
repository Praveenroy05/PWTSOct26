// Drop down

// 2 Types of drop down

// 1. Static drop down  - The value will never change
    // a. Single select DD
    // b. Multi select DD

// 2. Dynamic drop down - The value will be changable
    // a. Single select DD
    // b. Multi select DD


// Development of DD

// 1. Using <select> tag
// 2. Non select tag - div, span, li, ul...

// 1. DD developed using <select> tag
//-------------------------------------------

// Step by step procedure to select the value from the DD

// 1. Launch the url
// 2. Locate the drop down element by writing the locator
// 3. Get the value from the drop down using - selectOption("value", {label or value or index})

// Example: selectOption("DZ", {label: 'Algeria'} or {value:'AL'} or {index: 1})
// Index starts with 0

// 4. If the drop down is multi-select - selectOption(["AZ", "AL", "IN"])


//*********************************************************************** */

// 2. DD developed using NON <select> tag - div, span, li, ul,...

// Step by step procedure to select the value from the DD

// 1. Launch the url
// 2. Locate the drop down element by writing the locator
// 3. Click on the drop down element identified in #2
// 4. Identify and click on the element that you want to select from the drop down


import {test, expect} from '@playwright/test'

test("Handling drop down element developed using <select> tag", async function({page}){
    
    // 1. Launch the url
    await page.goto("https://practice.expandtesting.com/dropdown")

    // 2. Locate the drop down element by writing the locator
    const countryDD = page.locator("#country")

    // 3. Get the value from the drop down using - selectOption("value", {label or value or index})

    await countryDD.selectOption("IN")

    await expect(countryDD).toHaveValue("IN")

    // 2nd way we can also use value as an optional parameter

    await countryDD.selectOption({value: 'US'})

    // 3rd way - By using label as an optional parameter

    await countryDD.selectOption({label:'United Kingdom'})

    // 4th way - By using the index as an optional parameter
    // index starts with 0

    await countryDD.selectOption({index: 102})

    await page.goto("https://demoqa.com/select-menu")
    const carDD = page.locator("#cars")

    await carDD.selectOption(["volvo", "opel"])

    await expect(carDD).toHaveValues(["volvo", "opel"])

    await carDD.selectOption([{label:'Saab'}, {index:3}, {value:'volvo'}])
})

// Assignment to complete
// Select the value from the drop down which have been developed using NON select tag

// https://demoqa.com/select-menu

