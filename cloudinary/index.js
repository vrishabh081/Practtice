const express = require("express");
const app = express();
const PORT = 3000;

// Server-
app.listen(PORT, async() => {
    try{
        console.log("Server is running on PORT 3000")
    }
    catch(error){
        console.log(error);
    }
})