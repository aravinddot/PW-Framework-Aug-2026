


export interface IGrowingBatches {
    loadingIconDisappear(): Promise<void>
    grabRecordCount(): Promise<string>
    verifyTableCount(): Promise<void>
    verifyTableStatus(status: string, expectedText: string): Promise<string>
}