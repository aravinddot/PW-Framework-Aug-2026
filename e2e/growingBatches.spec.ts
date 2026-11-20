import { test } from '../src/config/fixtures'
import { GrowingBatches } from '../src/pages/growingBatches'
import { sideBarItem, SideBarLocators } from '../src/constants/constants'
import { APIUtils } from '../src/utils/apiUtils'


test.describe('Growing Batches Tests', () => {
    
    let growingBatches: GrowingBatches
    let apiUtils: APIUtils

    test.beforeEach(async ({ PageWithLogin, request }) => {
        growingBatches = new GrowingBatches(PageWithLogin)
        apiUtils = new APIUtils(request)
    })

    test('Verify growing batches table records count', async()=> {

        await growingBatches.navigateViaHomePage(SideBarLocators.growingBatches, sideBarItem.growingBatches.expectedUrl)
        await growingBatches.verifyTableCount()

    })


    test('Verify Table status', async()=> {

        await growingBatches.navigateViaHomePage(SideBarLocators.growingBatches, sideBarItem.growingBatches.expectedUrl)
        await growingBatches.verifyTableStatus("PLANNED", "Planned")
        
    })


    test.only('get all products', async()=> {
        const response = await apiUtils.getMethod('https://automationexercise.com/api/productsList')
        console.log(response)
    })



})