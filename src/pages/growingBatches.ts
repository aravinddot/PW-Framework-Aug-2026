import { Page, expect } from '@playwright/test';
import { CommonPage } from './commonPage';
import { IGrowingBatches } from '../types/interface';


export class GrowingBatches extends CommonPage implements IGrowingBatches {

    constructor(page: Page) {
        super(page)
    }

    async loadingIconDisappear() {
        await this.page.getByTestId('empty-empty-icon-div').waitFor({state: 'detached'})
    }

    async grabRecordCount() {
        const recordCount = await this.page.getByTestId('records-records-span-batches').innerText()
        const rows = recordCount.split(' ')[0] // 100 records = [100, records]
        return rows
    }

    async verifyTableCount() {
        await this.loadingIconDisappear()
        const rows =await this.grabRecordCount()
        await this.page.getByTestId('records-page-size-select-batches').selectOption('100')
        await this.loadingIconDisappear()
        console.log(rows)
        for(let i = 0; i < Number(rows); i++) {
            await this.page.locator(`[row-index="${i}"]`).scrollIntoViewIfNeeded()
            await this.page.locator(`[row-index="${i}"]`).waitFor({state: 'visible'})
            await expect(this.page.locator(`[row-index="${i}"]`)).toBeVisible()
        }
    }

    async verifyTableStatus(status: string, expectedText: string) {
        await this.loadingIconDisappear()
        await this.page.getByTestId('records-filter-status-select-batches').selectOption(status)
        await this.loadingIconDisappear()
        const rows =await this.grabRecordCount()
        for(let i = 0; i < Number(rows); i++) {
            const grabbedValue = await this.page.locator(`[row-index="${i}"] [col-id="6"]`).innerText()
            expect(grabbedValue).toBe(expectedText)
        }
        return rows
    }


}