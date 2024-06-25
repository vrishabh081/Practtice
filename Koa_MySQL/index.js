const koa = require("koa");
const bodyParser = require("koa-bodyparser");
const dbConnection = require("./config/db");
const app = new koa();

// Body Parser Middleware-
app.use(bodyParser());

// Server-
app.listen(8000, async () => {
    try{
        console.log("Server is running on PORT - 8000")
        dbConnection;
    }
    catch(error){
        console.log(error);
    }
})