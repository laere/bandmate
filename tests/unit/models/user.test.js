const User = require("../../../models/User");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const keys = require("../../../config/keys");

describe("user.generateAuthToken", () => {
  it("should return a valid jwt", () => {
    const payload = { _id: new mongoose.Types.ObjectId().toHexString() };

    const user = new User(payload);
    const token = user.generateAuthToken();
    const decoded = jwt.verify(token, keys.secretOrKey);

    expect(decoded).toMatchObject(payload);
  });
});

describe("user model", () => {
  it("should return a user object", () => {
    let user = new User({
      username: "zack",
      email: "123@123.com",
      password: "123456"
    });

    expect.objectContaining(user);
    expect(user).toHaveProperty("username", "email", "password");
  });
});
