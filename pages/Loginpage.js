import {expect} from "@playwright/test"

const {demoblaze} = require('../testData/testData1')

export class Loginpage {
    constructor(page) {
        this.page = page
        this.loginLinkTxt = '[id="login2"]'
        this.userName = '[id="loginusername"]'
        this.password = '[id="loginpassword"]'
        this.loginBtn = 'button:has-text("Log in")'
    }

    async browserLaunch(){
        await this.page.goto("https://www.demoblaze.com/")
    }

    async loginCredentials(){
        await this.page.locator(this.loginLinkTxt).click()

        await this.page.locator(this.userName).fill(demoblaze.userName)

        await this.page.locator(this.password).fill(demoblaze.password)
        await this.page.waitForTimeout(2000)

        await expect(this.page.locator(this.loginBtn)).toBeVisible()
        await this.page.click(this.loginBtn)

        await this.page.waitForTimeout(2000)

    }
}