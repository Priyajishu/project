import {test} from"@playwright/test"
import { Loginpage, LoginPage } from "../pages/loginpage"
import { CartPage } from "../pages/cartpage"

test("validating Workflow" , async ({page})=>{

    let lp = new Loginpage(page)
    let cp = new CartPage(page)

    await lp.browserLaunch()
    await lp.loginCredentials()

    await cp.printProducts()
    await cp.selectProduct()

})

