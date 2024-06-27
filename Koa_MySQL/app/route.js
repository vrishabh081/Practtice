const koaRouter = require("koa-router");
const { register, login, getProducts, addProduct } = require("./controller");
const router = new koaRouter();

router.post("/register", register);
router.post("/login", login);
router.get("/getProducts", getProducts);
router.post("/addProduct", addProduct);

module.exports = router;