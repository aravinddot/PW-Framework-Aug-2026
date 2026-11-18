import { expect, Page } from '@playwright/test';
import { CommonPage } from './commonPage';

export class HomePage extends CommonPage {

    page: Page

    constructor(page: Page) {
        super(page)
        this.page = page
    }


    async verifyFarmOverview() {
        await expect(this.page.getByTestId('page-heading-h1')).toContainText('Farm overview')
        await expect(this.page.getByTestId('dashboard-planning-link')).toBeVisible()
        await expect(this.page.getByTestId('dashboard-button-button')).toBeVisible()
    }

    async verifyUpcomingDeliveries() {
        await expect(this.page.getByTestId('dashboard-upcoming-deliveries-h2')).toHaveText('Upcoming deliveries')
    }

    async getTableHeaderValue() {
        await this.page.locator('thead tr').waitFor({state: 'visible'})
        const headers = await this.page.locator('thead tr th').allInnerTexts()
        return headers
    }




}