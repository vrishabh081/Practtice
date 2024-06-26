const dbConnection = require("../config/db");

const register = async (res) => {
    try{
        const {name, email, phone, age, married, password} = res.request.body;

        // Find user from email-
        const [rows] = await dbConnection.execute('select email from user where email = ?', [email]);
        if(rows.length > 0){
            res.body = "Email already exists",
            res.status = 400;
            return;
        }

        // Inserting data into user table-
        const payload = 'insert into user (name, email, phone, age, married, password) values (?, ?, ?, ?, ?, ?)';
        const data = await dbConnection.execute(payload, [name, email, phone, age, married, password])
        
        res.body = {
            status: true,
            data,
        }
    }
    catch(error){
        console.log(error.message);
    }
}

const login = async (res) => {
    const {email, password} = res.request.body;

    // Find user from email-
    const [[userEmail]] = await dbConnection.execute('select email, password from user where email = ?', [email]);
    if(!userEmail){
        res.status = 400;
        res.body = "Email not found";
        return;
    }

    // Check its password-
    if(password !== userEmail.password){
        res.status = 400;
        res.body = "Password does not match";
        return;
    }

    return res.body = "Login"
}



module.exports = {register, login};