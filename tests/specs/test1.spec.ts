import { test, expect } from '@playwright/test';
import { HomePage } from '../pageObjects/homePage';



let homepage: HomePage

test.beforeAll(async () => {
  console.log("Running Tests")
})

test.beforeEach(async ({ page }) => {
  homepage = new HomePage(page);
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
    await test.step("Validate if the Calculator Page is loaded Successfully", () => {

    })

    await test.step("Validate if the HomePage is loaded Successfully", () => {

    })

  });

})

