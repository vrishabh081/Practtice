const { Server } = require('socket.io');
const chatSocket = require('./chatSocket');

const socketSetup = (server) => {
    const io = new Server(server, {
        cors: {
            origin: '*',
            methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']
        }
    });

    io.on('connection', (socket) => {
        console.log('New client connected');
        chatSocket(io, socket);
    });
};

module.exports = socketSetup;
