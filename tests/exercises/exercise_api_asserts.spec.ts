import { test, expect } from "@playwright/test";

test("API asserts exercise", async ({ request }) => {
  const response = await request.patch(
    "https://tegb-backend-877a0b063d29.herokuapp.com/train"
  );
  const responseBody: any = await response.json();
  expect(typeof responseBody.timestamp).toBe("string");
  expect(responseBody.id).toBe(1);
});
