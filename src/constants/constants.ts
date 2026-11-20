

export const upcomingDeliveriesTableHeaders = ['Customer', 'Order', 'Delivery', 'Status']


export const sideBarItem = {
    growingBatches: {
        locator: "app-nav-link-batches-FARM OPERATIONS",
        expectedUrl: "https://kovai-greens.vercel.app/batches"
    },
    harvests: {
        locator: "app-nav-link-harvests-FARM OPERATIONS",
        expectedUrl: "https://kovai-greens.vercel.app/harvests"
    },
    products: {
        locator: "app-nav-link-products-FARM OPERATIONS",
        expectedUrl: "https://kovai-greens.vercel.app/products"
    },
    orders: {
        locator: "app-nav-link-orders-BUSINESS",
        expectedUrl: "https://kovai-greens.vercel.app/orders"
    }
}


export enum SideBarLocators {
    growingBatches = "app-nav-link-batches-FARM OPERATIONS",
    harvests = "app-nav-link-harvests-FARM OPERATIONS",
    products = "app-nav-link-products-FARM OPERATIONS",
    orders = "app-nav-link-orders-BUSINESS"
}