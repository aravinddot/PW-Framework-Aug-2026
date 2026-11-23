import { test } from '../src/config/fixtures'
import { HomePage } from '../src/pages/homepage';
import { upcomingDeliveriesTableHeaders } from '../src/constants/constants';
import query from '../src/testData/json/db.json'

const {products, joinQuery} = query

test.describe('Home Page Tests', () => {

    let homePage: HomePage;

    test.beforeEach(async ({ PageWithLogin}) => {
        homePage = new HomePage(PageWithLogin)
    })

    test('Verify Farm Overview, crop planning and new order buttons are visible', async () => {
        await homePage.verifyFarmOverview()
    })


    test('Verify table headers are visible in upcoming deliveries section', async()=> {
        await homePage.verifyUpcomingDeliveries()
        const headers = await homePage.getTableHeaderValue()
        await homePage.verifyTableHeaderValue(headers, upcomingDeliveriesTableHeaders)
    })


    test.only('verify db values', async()=> {
        const dbValues = await homePage.getValuesFrmDB(joinQuery)

        const rows = dbValues.rows

        //console.log(rows)

        for(const row of rows) {
            //await expect(page.locator('[class="single-products"]').getByText(row.product_name)).toBeVisible()

            console.log(row.product_name)
        }

    })

})