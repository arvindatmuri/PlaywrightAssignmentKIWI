import { Page } from "@playwright/test";

export class CalculatorPage {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
}