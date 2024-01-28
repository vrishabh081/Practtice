const https = require("https");
const fs = require("fs");

const options = {
    key: fs.readFileSync("certificate/key.pem"),
    cert: fs.readFileSync("certificate/cert.pem")
}

https.createServer(options, (req, res) => {
    res.end("SSL established")
}).listen(3000, () => {
    "Serve is successfully running on 3000"
})