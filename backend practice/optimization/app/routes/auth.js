const express = require("express");
const { createUser, getUser } = require("../controllers/auth");
const authRouter = express.Router();

authRouter.post("/auth/create-user", createUser);
authRouter.get("/auth/get-user", getUser);

module.exports = authRouter