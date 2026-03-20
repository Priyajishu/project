
import {test , expect} from "@playwright/test"

test("Handling Built-in locators Page" , async function({page}){

    //browser launch
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //ALT
    let orangeHrm = await page.getByAltText('company-branding')
    await expect(orangeHrm).toBeVisible()

    //Placeholder
    await page.getByPlaceholder('Username').fill('Admin')
    await page.waitForTimeout(3000)
    await page.getByPlaceholder('Password').fill('admin123')
    await page.waitForTimeout(3000)

    //Role
    await page.getByRole('button' , {name : "Login "}).click()
    await page.waitForTimeout(3000)

    //TEXT
    let userName = await page.locator('[class="oxd-userdropdown-name"]').textContent()
    console.log(userName)
    await expect(await page.getByText(userName)).toHaveText(userName)
    await expect( page.getByText(userName)).toBeVisible()


    //Label
    await expect(page.getByLabel('sidepanel')).toBeVisible()

    //Title
    await page.getByTitle('Help').click()


    //Test ID
    //playwright.dev
    await page.waitForTimeout(3000)
     


})