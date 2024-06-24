const koa = require("koa");
const koaRouter = require("koa-router");
const router = require("./app/route");
const app = new koa();
// const router = new koaRouter();

// // Routing-
// router.get("/get", async (res) => {
//     res.body = {
//         status: true,
//         data: {name: "Rishabh", email: "vrishabh081@gmail.com"}
//     }
// })

// // Middleware-
app.use(router.routes())

// Server-
app.listen(3000, async () => {
    try{
        console.log("Server is running on PORT - 3000")
    }
    catch(error){
        console.log(error);
    }
})