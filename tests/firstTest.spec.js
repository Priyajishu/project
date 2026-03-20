
import {test , expect} from "@playwright/test"

test("Handling single Page" , async function({page}){      //here page represents wndow / tab

    //browser launch
    await page.goto('https://www.facebook.com')


    //Title & Url
    let pageTitle = await page.title()
    console.log(pageTitle)

    console.log(await page.url())

    //Assert
    await expect(page).toHaveTitle("Facebook – log in or sign up")
    await expect(page).toHaveURL('https://www.facebook.com')

    //Username
    await page.locator('#email').fill('priyankach476@gmail.com')
    await page.waitForTimeout(3000)

    //password
    await page.locator('#pass').fill('Priyanka@123')
    await page.waitForTimeout(3000)

    //verify whether login button is appear in webpage
    await expect(page.locator('//button [ text() =  "Log in" ]')).toBeVisible()

    //login button
    await page.locator('//button [ text() ="Log in"]').click()
    await page.waitForTimeout(3000)

    

})