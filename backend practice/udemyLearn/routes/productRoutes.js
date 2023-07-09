const express = require("express");
const { AddProduct, GetProduct, GetSingleProduct, UpdateProduct, DeleteProduct } = require("../controllers/product");
const productRouter = express.Router();

// routes-
productRouter.route("/").get(GetProduct).post(AddProduct);
productRouter.route("/:_id").get(GetSingleProduct).patch(UpdateProduct).delete(DeleteProduct);

module.exports = productRouter;