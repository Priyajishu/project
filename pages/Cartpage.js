import { expect } from"@playwright/test"
import { demoblaze } from "../testData/testData1"

export class CartPage { 
    constructor(page){
        this.page = page
        this.productsName = '//div/h4/a'
        this.cartBtn = 'text=Add to cart'
    }

    async printProducts(){
        let products = await this.page.$$(this.productsName)

        for(const element of products) {
            let text = await element.textContent()
            console.log(await text)
        }

        await this.page.waitForTimeout(2000)
    }


    async selectProduct(){
        let products = await this.page.$$(this.productsName)

        for (const element of products){
            let text = await element.textContent()

            if(text.includes(demoblaze.productName)){
                await element.click()
                break
            }
        }

        await this.page.waitForTimeout(2000)

        await this.page.once("dialog" , async (a)=>{
           await expect(a.message()).toContain('Product added')
           await a.accept()
        })

        await this.page.waitForSelector(this.cartBtn)
        await this.page.locator(this.cartBtn).click()


        await this.page.waitForTimeout(2000)
    }
}