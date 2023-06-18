const ProductModel = require("../model/product");

// Get product-
const GetProduct = async (req, res) => {
    try{
        const data = await ProductModel.find();
        return res.status(200).json({message: data});
    }
    catch(error){
        console.log(error);
        console.log("OOP's product data not saved");
    }
}

// Get single product-
const GetSingleProduct = async (req, res) => {
    try{
        const {_id} = req.params;
        const data = await ProductModel.findById({_id});
        return res.status(200).json({message: data});
    }
    catch(error){
        console.log(error);
        console.log("OOP's product data not saved");
    }
}

// Add product-
const AddProduct = async (req, res) => {
    try{
        const payload = req.body;
        const data = await ProductModel.create(payload);
        data.save();
        return res.status(200).json({message: "Product data saved", data})
    }
    catch(error){
        console.log(error);
        console.log("OOP's product data not saved");
    }
}

// Update product-
const UpdateProduct = async (req, res) => {
    try{
        const payload = req.body;
        const {_id} = req.params;
        await ProductModel.findByIdAndUpdate({_id}, payload);
        return res.status(200).json({message: "Product updated saved"});
    }
    catch(error){
        console.log(error);
        console.log("OOP's product data not saved");
    }
}

// Delete product-
const DeleteProduct = async (req, res) => {
    try{
        const {_id} = req.params;
        await ProductModel.findByIdAndDelete({_id});
        return res.status(200).json({message: "Product deleted saved"});
    }
    catch(error){
        console.log(error);
        console.log("OOP's product data not saved");
    }
}

module.exports = {AddProduct, GetSingleProduct, GetProduct, UpdateProduct, DeleteProduct};

