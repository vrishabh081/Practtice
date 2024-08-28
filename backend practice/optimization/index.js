// Import files-
require("dotenv").config();
require("./config/db");

// Import-
const express = require("express");
const authRouter = require("./app/routes/auth");
const userRouter = require("./app/routes/user");
const app = express();

// Middleware-
app.use(express.json());

// Routes-
app.use("/", authRouter)
app.use("/", userRouter)

// Server-
app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server is running on ${process.env.SERVER_PORT}`)
})