import { expect, Locator, Page } from "@playwright/test"


export class HomePage {
    
    readonly page: Page;
    readonly openCalculatorButton:Locator;

    constructor(page: Page) {
        this.page = page;
        this.openCalculatorButton = this.page.getByRole('button', { name: 'Open the calculator' });

    }

    async launchHomePage(){
        await this.page.goto('');
        await console.log("HomePage Loaded Successfully");
    }

    async validateTitle(){
        await expect(this.page, "Should Have KiwiSaver Calculator in Title").toHaveTitle("KiwiSaver Calculator | Westpac NZ", {timeout:2000})
        await console.log("Title Validated Successfully")
    }

    async clickOpenCalculator() {
        await this.openCalculatorButton.click()
        await console.log("Clicked on OpenCalculator Button Successfully")
        
      }
}