import { test, expect } from "@playwright/test";

test("Assert response 200 OK", async ({ request }) => {
  const response = await request.get(
    "https://tegb-backend-877a0b063d29.herokuapp.com/train"
  );
  console.log(JSON.stringify(response, null, 2));
  expect(response.status()).toBe(200);
  expect(response.statusText()).toBe("OK");
});

test("Booking Content-Type Header check", async ({ request }) => {
  const response = await request.get(
    "https://restful-booker.herokuapp.com/booking"
  );
  const headers = await response.headers();
  const contentType = headers["content-type"];
  console.log("Hlavička content-type", contentType); // Vypíše hodnotu hlavičky do konzole
  expect(contentType).toBe("application/json; charset=utf-8");
  expect(contentType).toContain("application/json");
});

test("Response body asserts", async ({ request }) => {
  const response = await request.get(
    "https://tegb-backend-877a0b063d29.herokuapp.com/eshop/users"
  );
  const responseBody: any = await response.json();
  expect(responseBody[0].userId).toBeDefined();
  expect(typeof responseBody[0].userId).toBe("number");
  expect(responseBody[0].username).toBe("test1");
});

test("BONUS: Cycle asserts", async ({ request }) => {
  const response = await request.get(
    "https://tegb-backend-877a0b063d29.herokuapp.com/eshop/users"
  );
  const responseBody: any[] = await response.json();
  responseBody.forEach((user) => {
    expect(user.username).toBeDefined();
  });
});

/*
Vytvořte nový test: exercise_api_asserts.spec.ts ve složce exercises
Vytvořte volání API v playwright na https://tegb-backend-877a0b063d29.herokuapp.com/train
Metoda: PATCH
Otestujte, že timestamp je text (string), id = 1

*/
