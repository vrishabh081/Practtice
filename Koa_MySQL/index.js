const koa = require("koa");
const bodyParser = require("koa-bodyparser");
const router = require("./app/route");
const app = new koa();

// Body Parser Middleware-
app.use(bodyParser());

// Route-
app.use(router.routes())

// Server-
app.listen(8000, async () => {
    try{
        console.log("Server is running on PORT - 8000")
    }
    catch(error){
        console.log(error);
    }
})