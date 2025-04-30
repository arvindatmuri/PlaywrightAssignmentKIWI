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
  });

})

