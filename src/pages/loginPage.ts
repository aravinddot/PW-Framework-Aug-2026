import { Page, Locator } from '@playwright/test';


export class LoginPage {

    page: Page
    userNameInput: Locator
    passwordInput: Locator
    loginButton: Locator
    farmOverviewHeading: Locator
    userName: string
    password: string
    url: string

    constructor(page: Page) {
        this.page = page;
        this.userNameInput = page.getByTestId('connect-username-input')
        this.passwordInput = page.getByTestId('connect-password-input')
        this.loginButton = page.getByTestId('connect-button-button-2')
        this.farmOverviewHeading = page.getByTestId('page-heading-h1')
        this.userName = process.env.USER_NAME || ''
        this.password = process.env.PASS_WORD || ''
        this.url = process.env.URL || ''
    }

    async applicationLogin() {
        await this.page.goto(this.url)
        await this.userNameInput.fill(this.userName)
        await this.passwordInput.fill(this.password)
        await this.loginButton.click()
        await this.farmOverviewHeading.waitFor({ state: 'visible' })
    }


     async adminUserLogin() {
        await this.page.goto(this.url)
        await this.userNameInput.fill('superadmin')
        await this.passwordInput.fill(this.password)
        await this.loginButton.click()
        await this.farmOverviewHeading.waitFor({ state: 'visible' })
    }



}