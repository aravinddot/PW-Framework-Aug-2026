import { Page, expect } from '@playwright/test';


export class CommonPage {


    page: Page

    constructor(page: Page) {
        this.page = page
    }


    async verifyTableHeaderValue(tableHeader: string[], expectedTableHeader: string[]) {
        for(let i = 0; i < expectedTableHeader.length; i++) {
            expect(tableHeader[i]).toBe(expectedTableHeader[i])
        }
    }

    async navigateViaHomePage(locator: string, expectedUrl: string) {
        await this.page.getByTestId(locator).click()
        await this.page.waitForURL(expectedUrl)
        await expect(this.page).toHaveURL(expectedUrl)
        await this.page.waitForTimeout(2000)
    }


}