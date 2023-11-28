<!-- Socket  -->


<!-- NPM Packages -->
1. Backend Npm Package - socket.io
2. Frontend Npm Package - socket.io-client


<!-- Step 1 -->
Start with backend, import, give a port and allow cros origin.
const io = require("socket-io")(8080, {
    cors: {
        origin: "http://localhost:5173"
    }
})

<!-- Step 2 -->
It will establish a socket server-
io.on('connection', (socket) => {
    console.log("socket", socket.id)
})

<!-- Step 3 -->
Now move to frontend to connect socket from frontend-
import io then make a set up.