import { expect, Locator, Page } from "@playwright/test";
import { questions } from "../testData/questions";

export class CalculatorPage {
    

    readonly page: Page;
    readonly calcTitle: Locator;
    readonly questionNum: Locator;
    readonly ans3Dropdown: Locator;
    readonly ans5nextquestion: Locator;
    readonly ans1nextQuestion: Locator;
    readonly ans4Dropdown: Locator;
    readonly ans6Dropdown: Locator;
    readonly ans7nextQuestion:Locator;
    readonly ans8Dropdown:Locator;

    constructor(page: Page) {
        this.page = page;
        this.calcTitle = this.page.getByText('Westpac KiwiSaver Scheme Calculator', { exact: true });
        this.ans1nextQuestion = this.page.getByRole('button', { name: 'Next Question' });
        this.ans5nextquestion = this.page.locator('form').filter({ hasText: 'What’s your current KiwiSaver' }).getByRole('button');
        this.ans3Dropdown = this.page.getByRole('button', { name: 'Choose option' });
        this.ans4Dropdown = this.page.locator('div').filter({ hasText: /^Choose optionChoose option$/ }).getByLabel('Choose option');
        this.ans6Dropdown = this.page.locator('div').filter({ hasText: /^Choose optionChoose option$/ }).getByLabel('Choose option');
        this.ans7nextQuestion = this.page.locator('form').filter({ hasText: 'How much are your weekly' }).getByRole('button');
        this.ans8Dropdown = this.page.getByRole('button', { name: 'Choose fund' })
    }

    async validateCalculatorPage(){
        await expect(this.calcTitle, "Title Element in the Header should be Visible").toBeVisible();
    }

    async validateQuestion(qno: string) {
        await expect(this.page.getByText(qno, { exact: true }), `Validate if the Question Number ${qno} is Visible`).toBeVisible();
        await expect(this.page.getByRole('heading', { name:questions[qno]}), `Validate if the Question ${qno} is Visible`).toBeVisible();
      }

    async answerQuestion1(qno: string, answer: string){
        await this.page.getByRole('textbox', { name: questions[qno]}).pressSequentially(answer);
        await this.ans1nextQuestion.click();
    }

    async answerQuestion2(answer: "First Home"|"Retirement"){
        await this.page.getByRole('radio', { name: 'First Home' }).click();
    }

    async answerQuestion3(answer: "Less than 1 year"|"In 1 year"|"In 2 years"|"In 3 years"|"In 4 years"|"In 5 years or more"){
        await this.ans3Dropdown.click();
        await this.page.getByRole('option', { name: answer }).click();
    }

    async answerQuestion4(answer: "Employed"|"Self Employed"|"Not Employed"){
        await this.ans4Dropdown.click();
        await this.page.getByRole('option', { name: answer, exact: true }).click();
    }

    async answerQuestion5(qno: string, answer: string){
        await this.page.getByRole('textbox', { name: questions[qno]}).pressSequentially(answer);
        await this.ans5nextquestion.click();
    }

    async answerQuestion6(answer: "Not currently"| "Weekly"| "Fortnightly"|"Monthly"|"Annually"){
        await this.ans6Dropdown.click();
        await this.page.getByRole('option', { name: answer, exact: true }).click();
    }

    async answerQuestion7(qno: string, answer: string){
        await this.page.getByRole('textbox', { name: questions[qno]}).pressSequentially(answer);
        await this.ans7nextQuestion.click();
    }

    async answerQuestion8(answer: "Cash"| "Conservative"| "Moderate"){
        await this.ans8Dropdown.click();
        await this.page.getByRole('option', { name: answer, exact: true }).click();
    }



}