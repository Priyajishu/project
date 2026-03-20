import {test , expect} from "@playwright/test"
test("Handling Normal page" , async ({page})=>{

    //browser
    await page.goto('https://www.amazon.in/')

    //wait
    await page.waitForTimeout(3000)

    //screenshot
    await page.screenshot({path : "tests/Images/" + "NormalPage.png"})


})


test("Handling Full page" , async ({page})=>{

    //browser
    await page.goto('https://www.amazon.in/')

    //wait
    await page.waitForTimeout(3000)

    //screenshot
    await page.screenshot({path : "tests/Images/" + Date.now() + "FullPage.jpeg" , fullpage : true})


})


test("Handling Locator page" , async ({page})=>{

    //browser
    await page.goto('https://www.amazon.in/')

    //wait
    await page.waitForTimeout(3000)

    //screenshot
    await page.locator('[id="nav-logo-sprites"]')
    await page.screenshot({path : "tests/Images/" + "Locator.jpg"})

    //video
    //await page.video().path()


})