const koaRouter = require("koa-router");
const { register, login } = require("./controller");
const router = new koaRouter();

router.post("/register", register);
router.post("/login", login);

module.exports = router;