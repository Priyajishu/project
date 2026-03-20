import {test , expect} from "playwright/test"
test("Handling Datepicker 1" , async ({page})=>{
    //Browser launch
    await page.goto('https://testautomationpractice.blogspot.com/')

    //aaproch -1
    await page.locator('[id="datepicker"]').scrollIntoViewIfNeeded()

    //await page.locator('[id="datepicker"]').fill("07/18/2028")
    await page.waitForTimeout(3000)

    //aaproch - 2
    let selectedDate = "18"
    let selectedMonth = "September"
    let selectedYear = "2028"

    await page.locator('[id="datepicker"]').click()

    while(true){
    let currentMonth = await page.locator('[class="ui-datepicker-month"]').textContent()
    let currentYear = await page.locator('[class="ui-datepicker-year"]').innerText()

    if(currentMonth == selectedMonth && currentYear === selectedYear){
        break
    }
    

    await page.click('//span[text()="Next"]')
    //await page.click('//span[text()="Prev"]')
}
    await page.waitForTimeout(3000)

    //aaproch - 1
    //await page.click('.//a [@class="ui-state-default" and text()="18"]')

    //approch - 2
    let dates = await page.$$('//a [@class="ui-state-default"]')

    for (const element of dates) {
        let dt = await element.textContent()

        if( dt == selectedDate){
            await element.click()
            break
        }
    }

    await page.waitForTimeout(3000)

})