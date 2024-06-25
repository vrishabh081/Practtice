const mySql = require("mysql2");

// Database connection-
const connection = mySql.createConnection({
    host: "localhost",
    user: "root",
    password: "Rishabh398#",
    database: "test"
})

// Connect to database-
const dbConnection = connection.connect((err) => {
    if(err){
        console.log(err);
        return;
    }
    else{
        console.log("Database connected successfully");
    }
})

// Export database connection-
module.exports = dbConnection;