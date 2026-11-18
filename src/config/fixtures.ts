import { test as baseTest, Page } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { loginFixtures } from '../types/types'


export const test = baseTest.extend<loginFixtures>({
    PageWithLogin: async ({ page }, use) => {
        const loginPage = new LoginPage(page)
        await loginPage.applicationLogin()
        await use(page)
    },

     loginWithAdminUser: async ({ page }, use) => {
        const loginPage = new LoginPage(page)
        await loginPage.adminUserLogin()
        await use(page)
    }
})


