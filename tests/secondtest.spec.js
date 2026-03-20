import {test , expect} from "@playwright/test"

test("Handling single Page" , async function({page}){

    //browser launch
    await page.goto('https://practicetestautomation.com/practice-test-login/')

    //Title & Url
    let pageTitle = await page.title()
    console.log(pageTitle)

    console.log(await page.url())

    //Username
    await page.locator('#username').fill('student')
    await page.waitForTimeout(3000)

    //password
    await page.locator('#password').fill('Password123')
    await page.waitForTimeout(3000)

    //login
    await page.locator('.btn').click()
    await page.waitForTimeout(3000)

})