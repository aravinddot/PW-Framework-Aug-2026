import { APIRequestContext, expect } from '@playwright/test'


export class APIUtils {

    request: APIRequestContext

    constructor(request: APIRequestContext) {
        this.request = request
    }

    async getMethod(endPoint: string, token?: string) {
        if(token) {
            const response = await this.request.get(endPoint, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            expect(response.status()).toBe(200)
            expect(response.statusText()).toBe('OK')
            const body = await response.json()
            return body
        } else {
            const response = await this.request.get(endPoint)
            console.log(response)
            expect(response.status()).toBe(200)
            expect(response.statusText()).toBe('OK')
            const body = await response.json()
            console.log(body)
            return body
        }

    }


    async postMethod(url: string, data: any, token?: string) {
        
    }
}