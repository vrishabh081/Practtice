const { successMessage } = require("../../utils/messages");
const UserModel = require("../models/user");
const { faker } = require('@faker-js/faker');

// Create user-
const createUser = async (req, res) => {
    try{
        for(let i=0; i<100000; i++){
            const jsonData = {
                name: faker.name.firstName(),
                email: "A" + Math.floor(1000 + Math.random() * 9000) + faker.internet.email(),
                password: "123",
                address: faker.address.city(),
                index: `${i+1}`
            }
    
            const data = req.body;
            const result = await UserModel(jsonData);
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

// Get user-
const getUser = async (req, res) => {
    try{
        const data = req.query;
        const condition = {};
        const sort = {
            _id: -1
        }

        // Multiple searching -
        // if(data.search) {
        //     condition.$or = [
        //         {name: {$regex: new RegExp(data.search, "i")}},
        //         {email: {$regex: new RegExp(data.search, "i")}},
        //         {address: {$regex: new RegExp(data.search, "i")}}
        //     ]
        // }

        // Too fast but allowed for only 1 field and need indexing -
        // if (data.search) {
        //     condition.$text = { $search: data.search };
        // }

        // Filter -
        // if(data.search){
        //     condition.name = data.search
        // }

        const agg = [
            {
                $match: condition
            },
            {
                $sort: sort
            },
            {
                $skip: parseInt(data.skip) || 0
            },
            {
                $limit: parseInt(data.limit) || 5
            }
        ]

        const [result, count] = await Promise.all([
            UserModel.aggregate(agg),
            UserModel.countDocuments(condition)
        ])

        return res.status(200).json({
            message: successMessage.created,
            success: true,
            data: result,
            count
        })
    }
    catch(error){
        console.log(error);
    }
}

module.exports = {
    createUser,
    getUser
}