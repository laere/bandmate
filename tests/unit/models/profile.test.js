const Profile = require("../../../models/Profile");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const keys = require("../../../config/keys");

describe("profile model", () => {
  it("should return a profile object", done => {
    let profile = new Profile({ username: "zack", email: "123@123.com" });

    expect.objectContaining(profile);
    expect(profile).toHaveProperty("username", "zack");
    expect(profile).toHaveProperty("email", "123@123.com");

    done();
  });
});
