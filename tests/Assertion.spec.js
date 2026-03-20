import {test , expect} from "@playwright/test"

test("Handling Built-in locators Page" , async function({page}){

    //browser launch
    await page.goto('https://www.saucedemo.com/')

    //Username
    await page.locator('[name="user-name"]').fill('standard user')

    //assert
    await expect(page.locator('[name="user-name"]')).toBeVisible()
    await expect(page.locator('[name="user-name"]')).toBeEmpty()
    await expect(page.locator('[name="user-name"]')).toBeEditable()
    await expect(page.locator('[name="user-name"]')).toBeEnabled()

    //password
    await page.locator('[name="password"]').fill('secret_sauce')

    //Login
    await page.locator('[name="login-button"]').click()
    await page.waitForTimeout(3000)

})
