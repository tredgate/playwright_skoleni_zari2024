import { test } from "@playwright/test";

test("API regres in register", async ({ request }) => {
  await request.post("https://reqres.in/api/register", {
    headers: {
      "Accept-Encoding": "gzip, deflate, br",
    },
    data: {
      email: "eve.holt@reqres.in",
      password: "pistol",
    },
  });
});
