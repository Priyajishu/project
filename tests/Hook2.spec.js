import {test , expect} from "@playwright/test"

let page

test.beforeEach(async({browser})=>{

    let context = await browser.newContext() // Represent incognito window
    page = await context.newPage()


    //browser launch
    await page.goto('https://www.saucedemo.com/')

    //User name
    await page.locator('[id="user-name"]').fill("standard_user")

    await page.locator('[id="password"]').fill("secret_sauce")

    await page.locator('[name="login-button"]').click()
    await page.waitForTimeout(2000)
})

test.afterEach( async()=>{
    let id = 0
    await page.screenshot({path : "tests/Images" + DataTransfer.now() + 'ConfirmMsg${++id}.png'})
})

test("Print the products", async ({})=>{

    //scenarioa-1
    await page.locator('[data-test="product-sort-container"]').selectOption("Price (low to high)")

    let multipleProducts = await page.$$('[class="inventory_item_name"]')

    for (const element of multipleProducts){
        let text = await element.textContent()
        console.log(text)
    }
})

test("Add to cart", async ({})=>{

    //scenario - 2
    //await page.locator('Test.allTheThings() T-Shirt (Red)').click()
    await page.locator('[data-test="product-sort-container"]').selectOption("Price (low to high)")

    let multipleProducts2 = await page.$$('[class="inventory_item_name"]')

    for (const element of multipleProducts2){
        let text = await element.textContent()
        
        if(text == "Test.allTheThings() T-shirt (Red)"){
            await element.click()
        }
    }

    await page.waitForLoadState('load')
    await page.click('[name="add-to-cart"]')

})

test("Place order", async ({})=>{

    //scenario - 3

    await page.locator('[data-test="shopping-cart-link"]').click()

    await page.locator('[name="checkout"]').click()

    await page.fill('[id="first-name"]' , 'Ravi')

    await page.fill('[id="last-name"]' , 'Teja')

    await page.fill('[id="Postal-code"]' , '600093')

    await page.click('[id="continue"]')
    
    await page.locator('text=Finish').first().click()
})