// const assert = require("assert");

// Syntax -   
// assert.methodName(actual, expected, "Message");



// 1. equal-
// assert.equal("5", 5, "equal method");
// It won't return anything because it is using '==' operator;


// 2. strictEqual-
// assert.strictEqual("5", 5, "strictEqual method");
// It will thorw an error because it is using 'strictEqual' operator;


// 3. deepEqual-
// assert.deepEqual({ a: 1 }, { a: 2 }, "deepEqual method");
// It will thorw an error because it is using 'deepEqual' operator;


// 4. ok-
// assert.ok(1, 'Ok method');
// It won't thorw an error because 1 is truthy value;


// 5. ok-
// assert.ok(-1, 'Ok method');
// It will thorw an error because it is using 'ok' operator;


// --------------------------------------------------------------
// Use case in a real scenario-
// const checkParameter = (req) => {
//     try{
//         assert.ok(req.name, "Name is Required");
//         assert.ok(req.email, "Email is Required");
//         assert.ok(req.password.length > 8 && req.password.length < 16, "Please check lenght of your password");
//     }
//     catch(error){
//         console.log(error.message);
//     }
// } 

// let obj = {
//     name: "Rishabh Vishwakarma",
//     email: "r",
//     password: "Rishabh@123341324123"
// }

// checkParameter(obj);


// Create a custom assertFunction-
// const checkEmailAssertion = (email) => {
//     assert.ok(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email), "Email is not valid");
// }

// checkEmailAssertion("a1@gmail.com");
