const request = require("supertest");
const server = require("../../server");
const User = require("../../models/User");
const Profile = require("../../models/Profile");

describe("auth middleware", () => {
  let server;
  let token;

  beforeEach(() => {
    token = new User().generateAuthToken();
  });

  // afterEach(async () => {
  //   server.close();
  // });

  const mockReqeuest = () => {
    return request(server)
      .post("/api/profiles")
      .set("x-auth-token", token)
      .send({ username: "zack", email: "123@123.com" });
  };

  it("should return 401 if no token is provided", async () => {
    token = "";

    const res = await mockReqeuest();

    expect(res.status).toBe(401);
  });
});
