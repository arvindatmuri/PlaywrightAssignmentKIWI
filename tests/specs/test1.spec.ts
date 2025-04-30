import { test, expect } from '@playwright/test';
import { HomePage } from '../pageObjects/homePage';
import { CalculatorPage } from '../pageObjects/CalculatorPage';
import { ResultPage } from '../pageObjects/ResultPage';

let homepage: HomePage
let calcPage: CalculatorPage
let resPage:ResultPage

test.beforeAll(async () => {
  console.log("Running Tests")
})

test.beforeEach(async ({ page }) => {
  homepage = new HomePage(page);
  calcPage = new CalculatorPage(page);
  resPage = new ResultPage(page);
  await homepage.launchHomePage();
})

test.describe("Kiwi Saver Calculator End To End", () => {

  test('Answer all the questions and give us the projection for growth', async ({ page }) => {

    await test.step("Validate if the Kiwi Calculator Homepage is loaded Successfully", async () => {
      await homepage.validateTitle();
    })

    await test.step("Click on the open Calculator Page", async () => {
      await homepage.clickOpenCalculator()
    })

    await test.step("Validate if the Calculator Page is loaded Successfully", async () => {
      await calcPage.validateCalculatorPage()
    })

    await test.step("Validate Question 1 and Answer", async () => {
      await calcPage.validateQuestion("01");
      await calcPage.answerQuestion1("01", "20");
    })

    await test.step("Validate Question 2 and Answer", async () => {
      await calcPage.validateQuestion("02");
      await calcPage.answerQuestion2("First Home");
    })

    await test.step("Validate Question 3 and Answer", async () => {
      await calcPage.validateQuestion("03");
      await calcPage.answerQuestion3("In 5 years or more");
    })

    await test.step("Validate Question 4 and Answer", async () => {
      await calcPage.validateQuestion("04");
      await calcPage.answerQuestion4("Not Employed");
    })

    await test.step("Validate Question 5 and Answer", async () => {
      await calcPage.validateQuestion("05");
      await calcPage.answerQuestion5("05", "5000");
    })

    await test.step("Validate Question 6 and Answer", async () => {
      await calcPage.validateQuestion("06");
      await calcPage.answerQuestion6("Weekly");
    })

    await test.step("Validate Question 7 and Answer", async () => {
      await calcPage.validateQuestion("07");
      await calcPage.answerQuestion7("07","1000");
    })

    await test.step("Validate Question 8 and Answer", async () => {
      await calcPage.validateQuestion("08");
      await calcPage.answerQuestion8("Cash");
    })

    await test.step("Validate Result Projection", async () => {
      await resPage.printSummaryMessage();
    })
  });

})

