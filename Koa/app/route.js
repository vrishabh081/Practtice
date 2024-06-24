const koaRouter = require("koa-router");
const { getData, getId, getQuery, sendReponse } = require("./controller");
const router = new koaRouter();

router.get("/get", getData);
router.get("/:id([0-9]{4})/:name", getId)
router.get("/get-query", getQuery)
router.get("/reponse", sendReponse)

module.exports = router;