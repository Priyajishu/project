import {test , expect} from "playwright/test"
test("Handling Frames" , async ({page})=>{
    //Browser launch
    await page.goto('https://ui.vision/demo/webtest/frames/')

    //Count Frames
    let framescount = await page.frames()
    console.log(await framescount.length)

    //Apporch-1
    let frame1 = await page.frame({url : 'https://ui.vision/demo/webtest/frames/frame_1.html'})

    await frame1.locator('[type="text"]').fill("Javascript")
    await page.waitforTimeout(3000)

    //apporch - 2
    await page.framelocator('[src="frame_2.html"]').locator('[type="text"]').fill("Playwright")
    await page.waitforTimeout(3000)


})









test("Handling Frames" , async ({page})=>{
    //Browser launch
    await page.goto('https://ui.vision/demo/webtest/frames/')

    //Frame
    const frame3 = await page.frame({url : 'https://ui.vision/demo/webtest/frames/frame_3.html'})
    



})
