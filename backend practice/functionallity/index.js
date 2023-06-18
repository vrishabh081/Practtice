const express = require("express");
const app = express();

const cors = require("cors");
const dbConnection = require("./config/database");
const productRouter = require("./routes/productRoutes");

// middleware-
app.use(express.json());
app.use(cors());

// routes-
app.use("/api/v1/product", productRouter);

// server-
app.listen(8000, () => {
    try{
        dbConnection;
        console.log("Database connected succesfully");
        console.log("Server connected successfully");
    }
    catch(error){
        console.log(error);
        console.log("OOP's something is wrong");
        console.log("OOP's Database not connected");
    }
})