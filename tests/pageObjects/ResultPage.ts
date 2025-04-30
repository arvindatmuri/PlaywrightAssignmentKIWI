import { expect, Locator, Page } from "@playwright/test";
import { questions } from "../testData/questions";

export class ResultPage {
    

    readonly page: Page;
    readonly resultSummary:Locator

    constructor(page: Page){
        this.page = page;
        this.resultSummary = this.page.locator("xpath=(//p[contains(text(),'In')])[2]")

    }

    async printSummaryMessage(){
        let txt = await this.resultSummary.innerText()
        console.log(txt)

    }
}