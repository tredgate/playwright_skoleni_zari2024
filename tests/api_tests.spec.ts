import { test } from "@playwright/test";
import { faker } from "@faker-js/faker";

test("GET Request", async ({ request }) => {
  await request.get("https://tegb-backend-877a0b063d29.herokuapp.com/train");
});

test("GET request with parameter", async ({ request }) => {
  await request.get("https://tegb-backend-877a0b063d29.herokuapp.com/eshop", {
    params: {
      userId: 3,
    },
  });
});

test("GET Booking with Header", async ({ request }) => {
  await request.get("https://restful-booker.herokuapp.com/booking", {
    headers: {
      "Accept-Language": "en-US,en;q=0.9,cs-CZ;q=0.8,cs;q=0.7,it;q=0.6",
    },
  });
});

test("POST Request with body", async ({ request }) => {
  await request.post(
    "https://tegb-backend-877a0b063d29.herokuapp.com/eshop/register",
    {
      data: {
        username: faker.internet.userName(),
        password: "123456",
        email: faker.internet.exampleEmail(),
      },
    }
  );
});

test("Update Booking with authorized request - transfer data", async ({
  request,
}) => {
  const response = await request.post(
    "https://restful-booker.herokuapp.com/auth",
    {
      data: {
        username: "admin",
        password: "password123",
      },
    }
  );
  const responseBody: any = await response.json();
  const token = responseBody.token;

  const reqHeaders = {
    "Content-type": "application/json",
    Accept: "application/json",
    Cookie: "token=" + token,
  };
  const reqBody = {
    firstname: "James",
    lastname: "Brown",
    totalprice: 111,
    depositpaid: true,
    bookingdates: {
      checkin: "2018-01-01",
      checkout: "2019-01-01",
    },
    additionalneeds: "Breakfast",
  };

  await request.put("https://restful-booker.herokuapp.com/booking/10223", {
    headers: reqHeaders,
    data: reqBody,
  });
});
