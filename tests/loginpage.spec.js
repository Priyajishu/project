import {test , expect} from "@playwright/test"

test("Handling single Page" , async function({page}){      //here page represents wndow / tab

    //browser launch
    await page.goto('https://www.demoblaze.com/')


    //Title & Url
    let pageTitle = await page.title()
    console.log(pageTitle)

    console.log(await page.url())

    //Assert
    await expect(page).toHaveTitle('STORE')
    await expect(page).toHaveURL('https://www.demoblaze.com/')


    //click on login linkText
    await page.locator('[id="login2"]').click()
    await page.waitForTimeout(3000)

    //fill username
    await page.locator('#loginusername').fill('Raviteja18')
    await page.waitForTimeout(3000)

    //fill password
    await page.locator('#loginpassword').fill('Trend@123')
    await page.waitForTimeout(3000)

    //verify whether login button is appear in webpage
    await expect(page.locator('//button [ text() ="Log in"]')).toBeVisible()

    //login button
    await page.locator('//button [ text() ="Log in"]').click()
    await page.waitForTimeout(3000)

    //web elements
    let productList = await page.$$('//div/div//div//div//h4//a')

    for (const element of productList) {
        let text = await element.textContent()
        console.log(text.trim())
    }

    await page.waitForTimeout(3000)

})