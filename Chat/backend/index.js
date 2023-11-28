const express = require("express");
const dbConnection = require("./config/database");
const cors = require("cors");
const UserModel = require("./models/users");
const ConversationModel = require("./models/conversation");
const MessageModel = require("./models/messages");
const app = express();


// // Socket Server-
// const io = require("socket.io")(8080, {
//     cors: {
//         origin: "http://localhost:5173"
//     }
// })

// // Socket Connection-
// let onlineUsers = [];
// io.on('connection', socket => {

//     // // For Getting Messages From Frontend-
//     // socket.on('addUser', userId => {
//     //     socket.userId = userId
//     // });

//     // // For Sending Messages From Backend-
//     // io.emit('getUsers', socket.userId)

//     // console.log("Socket Connected", socket.id);

//     socket.on("addUser", (name) => {
//         // const isUserExist = onlineUsers?.filter((el) => el === name);
//         // if(!isUserExist){
//         //     onlineUsers.push({name, socketId: socket.id});
//         //     io.emit("getUsers", onlineUsers)
//         // }
//         onlineUsers.push({name, socketId: socket.id});
//         io.emit("getUsers", onlineUsers)

//         socket.on("disconnect", () => {
//             onlineUsers = onlineUsers?.filter((el) => el.socketId !== socket.id);
//             io.emit("getUsers", onlineUsers)
//         })
//     })
// })


// Socket Server-
const io = require("socket.io")(8080, {
    cors: {
        origin: "http://localhost:5173"
    }
})


let onlineUser = [];
io.on('connection', (socket) => {
    socket.on("addUser", (user) => {
        onlineUser.push({userId: user, socketId: socket.id});
        io.emit("getUsers", onlineUser);
        socket.on("disconnect", () => {
            onlineUser = onlineUser?.filter((el) => el.socketId !== socket.id);
            io.emit("getUsers", onlineUser)
        })
    })
})



// Middleware-------------------------------------------------------
app.use(cors());
app.use(express.json());



// APIs-------------------------------------------------------------

// Sign up-
app.post("/sign-up", async (req, res) => {
    try{
        const findUser = await UserModel.findOne({email: req.body.email});
        if(findUser){
            return res.status(400).json({msg: "User already exist"});
        }
        const result = new UserModel(req.body);
        await result.save();
        return res.status(200).json({msg: "Successfully registered"});
    }
    catch(error){
        console.log(error);
    }
})

// Log in-
app.post("/log-in", async (req, res) => {
    try{
        const {email, password} = req.body;
        const findUser = await UserModel.findOne({email});
        if(!findUser){
            return res.status(400).json({msg: "User not exist"});
        }
        if(findUser.password !== password){
            return res.status(400).json({msg: "Password incorrect"});
        }
        return res.status(200).json({msg: "Logged in successfully", user: findUser});
    }
    catch(error){
        console.log(error);
    }
})

// Get Users-
app.get("/get-users", async (req, res) => {
    try{
        const result = await UserModel.find();
        return res.status(200).json({msg: "Total User", user: result});
    }
    catch(error){
        console.log(error);
    }
})

// Create Conversation-
app.post("/create-conversation", async (req, res) => {
    try{
        const result = new ConversationModel(req.body);
        await result.save();
        return res.status(200).json({msg: "Conversation created"});
    }
    catch(error){
        console.log(error);
    }
})

// Get Conersation List-
app.get("/conversation-list/:id", async (req, res) => {
    try{
        console.log(req.params.id);
        const result = await ConversationModel.aggregate([
            {
                $match: {
                    members: {$in: [req.params.id]}
                }
            }
        ]);
        return res.status(200).json({msg: "Get All Result", data: result})
    }
    catch(error){
        console.log(error);
    }
})

// Send Messages-
app.post("/send-messages", async (req, res) => {
    try{
        const result = new MessageModel(req.body);
        await result.save();
        return res.status(200).json({msg: "Message sent successfully", data: result});
    }
    catch(error){
        console.log(error);
    }
})

// // Get Messages-
// app.get("/get-messages", async (req, res) => {
//     try{
//         const result = await MessageModel.find().populate("conversationId").aggregate([{
//             $match: {
//                 members: {$in: [req.]}
//             }
//         }]);
//         return res.status(200).json({msg: "Messages", data: result});
//     }
//     catch(error){
//         console.log(error);
//     }
// })


// Server And Database Connection-----------------------------------
app.listen(8000, async () => {
    try{
        dbConnection;
        console.log(`Server Connected Successfully On Port 8000`);
        console.log("Database Connected Successfully");
    }
    catch(error){
        console.log(error);
    }
})