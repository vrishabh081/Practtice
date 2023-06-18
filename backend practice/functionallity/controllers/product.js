const ProductModel = require("../model/product");

// Get product (searching)-
const GetProduct = async (req, res) => {
    try{
        // basic search-
        const searchTerm = req.query.search;
        if(searchTerm){
            const data = await ProductModel.find({
                name : {
                    $regex : searchTerm,
                    $options : "i"
                }
            })
            return res.status(200).json({message: data});
        }
        else{
            const data = await ProductModel.find();
            return res.status(200).json({message: data});   
        }
    }
    catch(error){
        console.log(error);
        console.log("OOP's product data not saved");
    }
}

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
//         const limit = req.query.limit || 3;

//         // now apply pagination logic;
//         // we need total documents then we will define total pages according to limit-
//         const totalDocument = await ProductModel.countDocuments({});
//         const totalPages = Math.ceil(totalDocument/limit);

//         // now apply it with skip and limit method-
//         const data = await ProductModel.find().skip((pageNumber-1) * limit).limit(limit)
//         return res.status(200).json({message: data, totalDocument, totalPages}); 
//     }
//     catch(error){
//         console.log(error);
//         console.log("OOP's product data not saved");
//     }
// }

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

