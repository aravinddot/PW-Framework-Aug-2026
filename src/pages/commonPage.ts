import { Page, expect } from '@playwright/test';
import { GenricUtils } from '../utils/genricUtils';
import { pool } from '../utils/dbUtils'

export class CommonPage extends GenricUtils {


    page: Page

    constructor(page: Page) {
        super(page)
        this.page = page
    }


    async verifyTableHeaderValue(tableHeader: string[], expectedTableHeader: string[]) {
        for(let i = 0; i < expectedTableHeader.length; i++) {
            expect(tableHeader[i]).toBe(expectedTableHeader[i])
        }
    }

    async navigateViaHomePage(locator: string, expectedUrl: string) {
        await this.clickAction(locator)
        await this.page.waitForURL(expectedUrl)
        await expect(this.page).toHaveURL(expectedUrl)
    }

    async getValuesFrmDB(query: string) {
        const result =await pool.query(query)
        return result
    }


}