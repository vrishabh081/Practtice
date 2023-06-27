let a : number = 6;
console.log(a);

let b : String = "Hello World";
b = "Rishabh";
console.log(b);

const c = (x: Number, y: String) => {
    console.log(x, y);
}
c(2, "Hello")

interface user {
    name : String,
    age : Number,
    married : Boolean
}

const userObj : user = {
    name : "String",
    age : 10,
    married : true
}
console.log(userObj.age);