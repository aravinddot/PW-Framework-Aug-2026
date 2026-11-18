import { test } from '../src/config/fixtures'
import { GrowingBatches } from '../src/pages/growingBatches'

test.describe('Growing Batches Tests', () => {
    
    let growingBatches: GrowingBatches

    test.beforeEach(async ({ PageWithLogin }) => {
        growingBatches = new GrowingBatches(PageWithLogin)
    })

    test('Verify growing batches table records count', async()=> {

        await growingBatches.navigateViaHomePage('app-nav-link-products-FARM OPERATIONS', 'https://kovai-greens.vercel.app/products')

    })



})