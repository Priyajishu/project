import {test , expect} from "playwright/test"
test("Handling single drop down" , async function ({page}) {

    //browser launch
    await page.goto('https://testautomationpractice.blogspot.com/')

    //scroll
    await page.locator('[id="altertBin"]').scrollIntoViewIfNeeded
    await page.waitForTimeout(1500)

    //handle Alert
    await page.on('dialog' , async (a)=>{
        await expect(a.type()).toEqual('alert')
        await expect(a.message()).toContain('alert box!')
        await page.waitForTimeout(2000)
        //await a.accept()
        await a.dismiss().catch((er)=> console.log(er))
    })

    //click on simple Alert
    await page.click('[id="alertBtn"]')

    //wait
    await page.waitForTimeout(3000)

    //Refresh
    await page.reload()
    await page.waitForTimeout(3000)

    await page.click('[id="alertBtn"]')
    await page.waitForTimeout(3000)

})





test("Handling Confirm Alert" , async ({page})=>{
    //browser launch
    await page.goto('https://testautomationpractice.blogspot.com/')

    //scroll
    await page.locator('//button[text()="Confirmation Alert"]').scrollIntoViewIfNeeded
    await page.waitForTimeout(3500)

    //Handle
    await page.once("dialog" , async (b)=>{
        await expect(b.type()).toEqual('Confirm')
        await expect(b.message()).toContain('Press a button!')
        await page.waitForTimeout(2000)
        await b.dismiss
    })

    //click on confirm
    await page.click('//button[text()="Confirmation Alert"]')
    await page.waitForTimeout(2000)

    //not possible todo multiple times action
    //refresh
    //await page.reload()
    //await page.waitForTimeout(2000)
    //await page.click('//button[text()="Confirmation Alert"]')
    //await page.waitForTimeout(2000)
})






test.only("Handling Prompt Alert" , async({page})=>{
    //browser launch
    await page.goto('https://testautomationpractice.blogspot.com/')

    //scroll
   await page.locator('text=Prompt Alert').scrollIntoViewIfNeeded
   await page.waitForTimeout(3000)

    //Handle
    await page.once("dialog" , async (c)=>{
        await expect(c.type()).toEqual('prompt')
        await expect(c.message()).toContain('enter your name')
        await expect(c.defaultValue()).toContain('Harry Potter')
        await page.waitForTimeout(2000)
        await c.accept('Raviteja')
})

//Click to confirm
await page.locator('button:has-text("Prompt Alert")')
    await page.waitForTimeout(3000)

})





















