const UserModel = require("../model/user")

const createUser = async (req, res) => {
    try{
        const data = req.body;
        const user = await UserModel(data);
        user.save();

        return res.status(200).json({
            data: user,
            success: true
        })
    }
    catch(error){
        console.log(error);
    }
}


const getUsers = async (req, res) => {
    try{
        const data = req.query;
        const user = await UserModel.find();

        return res.status(200).json({
            data: user,
            success: true
        })
    }
    catch(error){
        console.log(error);
    }
}
module.exports = {
    createUser,
    getUsers
}