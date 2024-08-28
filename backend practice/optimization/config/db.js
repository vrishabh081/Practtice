const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI)
.then((res) => console.log("Database connected successfully"))
.catch((err) => console.log("Database connection error", err))