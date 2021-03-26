const request = require("supertest");
const app = require("../app");

describe("Test the root path", () => {
  test("It should response the GET method", async () => {
    const response = await request(app).get("/api/");
    expect(response.statusCode).toBe(200);
  });

  test("It should user data according to the access-token stored in db previously", async () => {
    const response = await request(app).get("/api/users/getuserdata");
    // console.log('====================================');
    // console.log(response.text);
    // console.log('====================================');
    expect(response.statusCode).toBe(200);
  });

});
