import { test } from '../src/config/fixtures'
import { HomePage } from '../src/pages/homepage';
import { upcomingDeliveriesTableHeaders } from '../src/constants/constants';

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

})