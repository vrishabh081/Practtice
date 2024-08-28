const { default: mongoose } = require("mongoose");
const { successMessage } = require("../../utils/messages");
const { faker } = require('@faker-js/faker');
const BlogModel = require("../models/blog");
const UserModel = require("../models/user");

// Create blog-
const createBlog = async (req, res) => {
    try{
        for(let i=0; i<100000; i++){
            const user = await UserModel.findOne({index: `${i+1}`})
            const jsonData = {
                user_id: user._id,
                title: "B" + Math.floor(1000 + Math.random() * 9000) + faker.music.songName(),
                description: faker.lorem.sentences(1),
                media: {
                    url: faker.image.avatar(),
                    type: "image"
                }
            }
    
            const data = req.body;
            const result = await BlogModel(jsonData);
            result.save();
        }

        return res.status(200).json({
            message: successMessage.created,
            success: true
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            message: error.message,
            success: false
        })
    }
}


// Get blog-
const getBlog = async (req, res) => {
    try{
        const data = req.query;
        const condition = {};

        if(data.search){
            condition.$or = [
                {"user_details.name": {$regex: new RegExp(data.search, "i")}},
                {"user_details.address": {$regex: new RegExp(data.search, "i")}}
            ]
        }

        const sort = {
            _id: -1
        }

        const agg = [
            {
                $match: condition
            },
            {
                $lookup: {
                    from: "users",
                    localField: "user_id",
                    foreignField: "_id",
                    as: "user_details"
                }
            },
            {
                $unwind: "$user_details"
            },
            {
                $sort: sort
            },
            {
                $skip: parseInt(data.skip) || 0
            },
            {
                $limit: parseInt(data.limit) || 10
            },
            {
                $project: {
                    _id: 1,
                    title: 1,
                    content: 1,
                    "user_details.name": 1,
                    "user_details.address": 1
                }
            }
        ]

        const [result, count] = await Promise.all([
            BlogModel.aggregate(agg),
            BlogModel.countDocuments(condition)
        ]);

        return res.status(200).json({
            data: result,
            count
        })
    }
    catch(error){
        console.log(error)
    }
}


module.exports = {
    createBlog,
    getBlog
}