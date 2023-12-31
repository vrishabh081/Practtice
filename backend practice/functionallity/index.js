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


// handle unknown routes-
app.all("*", (req, res, next) => {
    res.status(404).json ({
        status : false,
        message: `OOP's this route - ${req.originalUrl} not found on this server`
    })
})

// handle global errors-
app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "error"

    res.stutus(err.statusCode).json({
        status: err.status,
        message: err.message
    })
})


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