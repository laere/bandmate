const request = require("supertest");
const User = require("../../models/User");
const server = require("../../server");

describe("/api/users", () => {
  it("should respond to GET /test route", async done => {
    const res = request(server).get("/test");
    expect(res.statusCode).toBe(200);
  });
});
