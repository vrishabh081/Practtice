const mongoose = require("mongoose");

mongoose.connect('mongodb://vrishabh:abc@localhost:27018')
.then((res) => console.log("Mongo DB connected successfully"))
.catch((error) => console.log(error))
