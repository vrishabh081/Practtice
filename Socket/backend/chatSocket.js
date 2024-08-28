const chatSocket = (io, socket) => {
    console.log("Room", socket.rooms);
    console.log("Socket", socket.data)
    socket.on('message', (data) => {
        console.log('Message received:', data);
        io.emit('message', data);
    });

    socket.on("test1", (data) => {
        console.log("Test1", data);
        io.emit("test1", data);
    })

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
};

module.exports = chatSocket;
