
import {test , expect} from "playwright/test"
test("Handling single drop down" , async function ({page}) {
    //browser launch
    await page.goto('https://testautomationpractice.blogspot.com/')

    //scroll
    await page.locator('[id="country"]'),scrollintoviewifneeded()

    //select A Drop Down
    //1 Visible text
    await page.locator('[id="country"]').selectOption("India")
    await page.waitForTimeout(3000)

    //2Label
    await page.locator('[id="country"]').selectOption({label : "China"})
    await page.waitForTimeout(3000)

    //3 value
    await page.locator('[id="country"]').selectOption({value : "australia"})
    await page.waitForTimeout(3000)

    //4 Index
    await page.locator('[id="country"]').selectOption({index : 3})
    await page.waitForTimeout(3000)

    //Assert
    await expect(page.locator('[id="country"] option')).toHavecount(10)
    await expect((await page.$$('[id="country"]>option')).length).toBe(10)


})








test("Handling Multiple DropDown" , async ({page})=>{

    //browser launch
    await page.goto('https://testautomationpractice.blogspot.com/')

    //scroll
    await page.locator('[id="colors"]').scrollIntoViewIfNeeded()

    //Select drop down
    await page.locator('[id="colors"]').selectOption(["Red" , "Green" , "Red" , "Green"])
    await page.waitForTimeout(3000)

    //De Select
    await page.locator('[id="colors"]').selectOption([])
    await page.waitForTimeout(3000)

    //Select duplicates
    await page.locator('[id="colors"]').selectOption([{label : "Red"} , {value : "green"} , {index : 4} , {index : 6}])
    await page.waitForTimeout(3000)
})







test("Handling dynamic & Auto-Suggest Drop down" , async ({page})=>{
    //browser launch
    await page.goto('https://ticketnew.com/movies/chennai')

    //click on search
    await page.click('(//div[text()="Search for movies, cinemas and more"])[1]')

    //search for a movie
    await page.locator('(//input[ contains(@class, "dds-rounded-lg dds-outline-none")])[2]').fill('man')
    await page.waitForTimeout(2000)

    let movieList = await page.$$('//div[contains(@class,"dds-flex dds-flex-col dds-gap-[4px]")]//h5')
    for (const element of movieList) {
        
        let text = await element.textContent()
        if (text == "Spider-Man: Brand New Day"){
            await element.click()
            break
        }
    }

    await page.waitForTimeout(5000)

})










