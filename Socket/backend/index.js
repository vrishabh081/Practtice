const express = require("express");
const app = express();
const port = 8000;
const { join } = require("node:path");
const { createServer } = require("node:http");
const { Server } = require("socket.io");
const server = createServer(app);


// Serving html file -
app.get("/send-html", async (req, res) => {
    try {
        return res.sendFile(join(__dirname, "index.html"))
    }
    catch (error) {
        console.log(error);
    }
})


// Socket -
const io = new Server(server);
io.on("connection", (socket) => {
    // console.log("a user connected");

    // Every socket has a disconnect event--------------------------
    // socket.on("disconnect", () => {
    //     console.log("socket has been disconnected")
    // })

    // Create an event and get messages-
    socket.on("msg", (msg) => {
        io.emit("msg", msg)
    })

    socket.on('request', (arg1, arg2, callback) => {
        // console.log(arg1); // { foo: 'bar' }
        // console.log(arg2); // 'baz'
        callback({
            status: 'ok'
        });
    });

    // socket.broadcast.emit("Hi")

    socket.onAny((eventName, value) => {
        console.log(eventName, value)
    })

})


// Server -
server.listen(port, async () => {
    try {
        console.log(`Server is successfully running on port - ${port}`)
    }
    catch (error) {
        console.log(error)
    }
})