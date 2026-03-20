//Hover, Double click, Right click, Drag and drop
//key board actions

import {test , expect} from "playwright/test"
test("Handling Mouse hover" , async ({page})=>{

    //Browser launch
    await page.goto('https://testautomationpractice.blogspot.com/')

    //scroll
    await page.locator('[class="dropbtn"]').scrollIntoViewIfNeeded
    await page.waitForTimeout(2000)

    //point me
    await page.locator('[class="dropbtn"]').hover()
    await page.waitForTimeout(2000)

    //laptops
    await page.click('//a[text()="Laptops"]')
    await page.waitForTimeout(2000)


    //Double click
    await page.locator('[id="field1"]').clear()
    await page.waitForTimeout(2000)

    await page.locator('[id="field1"]').fill("Priyanka")
    await page.waitForTimeout(2000)

    await page.locator('text=Copy Text').dblclick
    await page.waitForTimeout(2000)

})


//npx playwright test mouseKeyboard.spec.js --project=chromium --headed

test("Handling Drag and Drop " , async({page})=>{
    //Browser launch
    await page.goto('https://testautomationpractice.blogspot.com/')

    //scroll
    await page.locator('[class="dropbtn"]').scrollIntoViewIfNeeded
    await page.waitForTimeout(2000)

    //Source
    let source = await page.locator('[id="draggable"]')

    //Target
    let target = await page.locator('[id="droppable"]')

    //Approch -1 
    // await page.dragAndDrop('[id="draggable"]' , '[id="droppable"]')

    // //approch - 2
    // await source.dragTo(target)

    //approch - 3
    await source.hover()
    await page.mouse.down()

})


test.only("Handling Keyboard Action" , async({page})=>{
    //Browser
    await page.goto('https://gotranscript.com/text-compare')

    //scroll
    await page.mouse.wheel(0 , 250)

    //fill
    await page.locator('[name="text1"]').fill('Javascript with playwright')

    //Cntrl + A
    await page.keyboard.press('Control+KeyA')

    //Cntrl + C
    await page.keyboard.press('Control+KeyC')

    //Tab
    await page.keyboard.down('Tab')
    await page.keyboard.up('Tab')

    //Cntrl + V
    await page.keyboard.press('Control+KeyV')

    //Enter
    await page.locator('[id="recaptcha"]').press('Enter')

    //pause
    await page.pause()
})












