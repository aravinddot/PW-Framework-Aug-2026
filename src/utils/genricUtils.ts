import { Page } from '@playwright/test'

export class GenricUtils {

    page: Page

    constructor(page: Page) {
        this.page = page
    }


    async clickAction(locator: string) {
        await this.page.getByTestId(locator).click()
    }


}