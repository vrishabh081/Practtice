import {io} from "socket.io-client";

const socketUrl = 'http://localhost:8000';

export const socket = io(socketUrl, {
    autoConnect: true
});