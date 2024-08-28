const express = require("express");
const { createBlog, getBlog } = require("../controllers/user");
const userRouter = express.Router();

userRouter.post("/user/create-blog", createBlog);
userRouter.get("/user/get-blog", getBlog);

module.exports = userRouter