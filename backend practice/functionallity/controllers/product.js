const ProductModel = require("../model/product");

// Get product (searching)-
// const GetProduct = async (req, res) => {
//     try{
//         // basic search-
//         const searchTerm = req.query.search;
//         if(searchTerm){
//             const data = await ProductModel.find({
//                 name : {
//                     $regex : searchTerm,
//                     $options : "i"
//                 }
//             })
//             return res.status(200).json({data});
//         }
//         else{
//             const data = await ProductModel.find();
//             return res.status(200).json({data});   
//         }
//     }
//     catch(error){
//         console.log(error);
//         console.log("OOP's product data not saved");
//     }
// }

// Get product (searching)-
// const GetProduct = async (req, res) => {
//     try{
//         // basic search-
//         const searchTerm = req.query.search;
//         if(searchTerm){
//             const data = await ProductModel.find({
//                 name : {
//                     $regex : `^${searchTerm}`,
//                     $options : "i"
//                 }
//             })
//             return res.status(200).json({message: data});
//         }
//         else{
//             const data = await ProductModel.find();
//             return res.status(200).json({message: data});   
//         }
//     }
//     catch(error){
//         console.log(error);
//         console.log("OOP's product data not saved");
//     }
// }

// Get product (filtering)-
// const GetProduct = async (req, res) => {
//     try{
//         // filtering-
//         const filterTerm = req.query;

//         // now apply it-
//         const data = await ProductModel.find(filterTerm)
//         return res.status(200).json({message: data}); 
//     }
//     catch(error){
//         console.log(error);
//         console.log("OOP's product data not saved");
//     }
// }

// Get product (multiple filter)-
// const GetProduct = async (req, res) => {
//     try{
//         // filtering-
//         const filterTerm = req.query;
//         let query = {};

//         for(let key in filterTerm){
//             if(filterTerm.hasOwnProperty(key))[
//                 query[key] = filterTerm[key]
//             ]
//         }

//         // now apply it-
//         const data = await ProductModel.find(query)
//         return res.status(200).json({message: data}); 
//     }
//     catch(error){
//         console.log(error);
//         console.log("OOP's product data not saved");
//     }
// }

// Get product (range filter)-
// const GetProduct = async (req, res) => {
//     try{
//         // range filtering (we need min price and max price)-
//         let minPrice = parseFloat(req.query.minPrice) || 0;
//         let maxPrice = parseFloat(req.query.maxPrice) || 0;
//         let query = {};

//         // logic of range-
//         if(minPrice || maxPrice){
//             query = {
//                 price : {$gte : minPrice, $lte : maxPrice}
//             }
//         }

//         // now apply it-
//         const data = await ProductModel.find(query)
//         return res.status(200).json({message: data}); 
//     }
//     catch(error){
//         console.log(error);
//         console.log("OOP's product data not saved");
//     }
// }

// Get product (sorting)-
// const GetProduct = async (req, res) => {
//     try{
//         // sorting (for sorting we need two things - sortField and sortOrder) -
//         const sortTerm = req.query.sortField || "name";
//         const sortOrder = req.query.order || "asc";

//         // now apply sorting logic;
//         let sorting = {};
//         sorting[sortTerm] = sortOrder === "asc" ? 1 : -1;

//         // now apply it with sort method-
//         const data = await ProductModel.find().sort(sorting);
//         return res.status(200).json({message: data}); 
//     }
//     catch(error){
//         console.log(error);
//         console.log("OOP's product data not saved");
//     }
// }

// Get product (pagination)-
// const GetProduct = async (req, res) => {
//     try{
//         // pagination (for pagination we need two things - pageNumber and limit) -
//         const pageNumber = req.query.page || 1;
//         const limit = req.query.limit || 5;

//         // now apply pagination logic;
//         // we need total documents then we will define total pages according to limit-
//         const totalDocument = await ProductModel.count();
//         const totalPages = Math.ceil(totalDocument/limit);

//         // now apply it with skip and limit method-
//         const data = await ProductModel.find().skip((pageNumber-1) * limit).limit(limit)
//         return res.status(200).json({data, totalDocument, totalPages, limit}); 
//     }
//     catch(error){
//         console.log(error);
//         console.log("OOP's product data not saved");
//     }
// }


// API Features-
class ApiFeatures {
    constructor (query, queryString) {
        this.query = query;
    }

    // filter-
    filter () {
        // simple filter -
        const queryObj = {...this.queryString};
        const excludedField = ["page", "sort", "order", "search", "field", "limit"]
        excludedField.forEach((el) => delete queryObj[el])

        // advance filter -
        let queryStr = JSON.stringify(queryObj);
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);

        this.query.find (JSON.parse (queryStr))

        return this;
    }

    // sort-
    sort () {
        if(this.queryString.sort){
            let sortBy = this.queryString.sort.split(",").join(" ");
            this.query = this.query.sort(sortBy);
        }
        else{
            this.query = this.query.sort("_id")
        }

        return this;
    }

    // fields-
    limitFields () {
        if(this.queryString.fields){
            const fields = this.queryString.fields.split(",").join(" ");
            this.query = this.query.select(fields);
        }
        else{
            this.query = this.query.select("-_v");
        }

        return this;
    }

    // pagination-
    pagination () {
        const page = this.queryString.page * 1 || 1;
        const limit = this.queryString.limit * 1 || 10;
        const skip = (page - 1) * limit;

        this.query = this.query.skip(skip).limit(limit);

        return this;
    }
}


// Get product using function (all functionallity)-
// const GetProduct = async (req, res) => {
//     try{
//         // 1. Build query -

//         // filtering-
//         const queryObj = {...req.query};
//         const excludedField = ["page", "sort", "order", "search", "field", "limit"]
//         excludedField.forEach((el) => delete queryObj[el])

//         // advance filtering-
//         let queryStr = JSON.stringify(queryObj);
//         queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);
//         queryStr = JSON.parse(queryStr);
//         let query = ProductModel.find(queryStr);

//         // sorting-
//         if(req.query.sort){
//             let sortBy = req.query.sort.split(",").join(" ");
//             query = query.sort(sortBy);
//         }
//         else{
//             query = query.sort("_id")
//         }

//         // pagination-
//         const page = req.query.page * 1 || 1;
//         const limit = req.query.limit * 1 || 10;
//         const skip = (page - 1) * limit;

//         if(page && limit){
//             query = query.skip(skip).limit(limit);
//         }

//         // 2. Execute query -
//         const data = await query;

//         // 3. Send Response -
//         return res.status(200).json({message: data}); 
//     }
//     catch(error){
//         console.log(error);
//         console.log("OOP's product data not found");
//     }
// }


// Get product using class (all functionallity)-
const GetProduct = async (req, res) => {
    try{
        // 1. Execute query -
        const features = new ApiFeatures(ProductModel.find(), req.query)
        const data = await features.query;

        // 2. Send Response -
        return res.status(200).json({message: data}); 
    }
    catch(error){
        console.log(error.message);
        console.log("OOP's product data not found");
    }
}


// ------------------------------*******---------------------------------
 
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
    const {page = 1, limit = 5} = req.query;
    try{
        const payload = req.body;
        const data = await ProductModel.create(payload);
        const totalDocument = await ProductModel.count();
        const totalPages = Math.ceil(totalDocument/limit);

        const newData = await ProductModel.find().limit(limit).skip((page - 1) * limit)
        return res.status(200).json({message: "Product data saved", data : newData, totalPages})
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
    const {limit = 5} = req.query;
    try{
        const page = (req.headers.authorization);
        const {_id} = req.params;
        await ProductModel.findByIdAndDelete({_id});
        const totalDocument = await ProductModel.count();
        const totalPages = Math.ceil(totalDocument/limit);
        const newData = page === totalPages ? (
            await ProductModel.find().limit(limit).skip((page - 1) * limit)
        ) : (
            await ProductModel.find().limit(limit).skip((totalPages - 1) * limit)
        )
        return res.status(200).json({message: "Product deleted saved", data : newData, totalPages});
    }
    catch(error){
        console.log(error);
        console.log("OOP's product data not saved");
    }
}

module.exports = {AddProduct, GetSingleProduct, GetProduct, UpdateProduct, DeleteProduct};

