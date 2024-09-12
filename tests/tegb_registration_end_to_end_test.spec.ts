import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";

test("Register user in TEG#B and check API", async ({ page }) => {
  const username = faker.internet.userName();
  const password = "123456";
  const email = faker.internet.exampleEmail();

  await page.route(
    "https://tegb-backend-877a0b063d29.herokuapp.com/tegb/register",
    (route, request) => {
      console.log(JSON.stringify(request.postData(), null, 2)); // ? Výpis request body do konzole ve chvíli, kdy se req zachytí
      route.continue();
    }
  );

  await page.goto("https://tegb-frontend-88542200c6db.herokuapp.com/register");
  await page.locator("//input[@data-testid='username-input']").fill(username);
  await page.locator("//input[@data-testid='email-input']").fill(email);
  await page.locator("//input[@data-testid='password-input']").fill(password);
  await page.locator("//button[@data-testid='submit-button']").click();

  const response = await page.waitForResponse(
    "https://tegb-backend-877a0b063d29.herokuapp.com/tegb/register"
  );

  const resBody = await response.json();
  expect(resBody.username).toBe(username);
  expect(resBody.email).toBe(email);
  expect(resBody.userId).toBeDefined();
  expect(typeof resBody.userId).toBe("number");
  expect(resBody.updatedAt).toBe(null);
  expect(resBody.active).toBe(1);

  expect(page.locator("//div[@data-testid='success-message']")).toBeVisible();
});
