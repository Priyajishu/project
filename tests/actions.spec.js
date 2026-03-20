import {test , expect} from "@playwright/test"

test("Handling radio & Checkboxes" , async function({page}){

    //browser launch
    await page.goto('https://testautomationpractice.blogspot.com/')

    //scroll
    await page.locator('[for="days"]').scrollIntoViewIfNeeded()
    await page.waitForTimeout(2000)

    //Radio
    //approch-1
    await page.locator('//label[text()="Female"]').click()
    await expect(page.locator('//label[text()="Female"]')).toBeChecked()
    await page.waitForTimeout(2000)

    //approch-2
    await page.locator('[id="male"]').click()
    await expect(await page.locator('[id="male"]').isChecked() ).toBeTruthy()
    await page.waitForTimeout(2000)

    //single check box
    await page.locator('//label[text()="Sunday"]').click()
    await page.waitForTimeout(2000)

    //multiple check box
    let multiplechecks = [
        page.locator('[id="tuesday"]') , page.locator('#thursday'),
        page.locator('id=saturday')

    ]

    //select multiple check boxes
    for (const element of multiplechecks) {
        await element.check()
        await expect(element).toBeChecked()
        await page.waitForTimeout(2000)
    }

    //De - select Multiple check boxes
    for (const element of multiplechecks) {
        await element.uncheck()
        await expect(element).not.toBeChecked()
        await page.waitForTimeout(2000)
    }
})
