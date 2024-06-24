const getData = async (res) => {
    try{
        res.body = {
            status: true,
            data: {
                name: "Rishabh",
                email: "vrishabh081@gmail.com",
                age: 22
            },
            res
        }
    }
    catch(error){
        console.log(error);
    }
} 

const getId = async (res) => {
    try{
        // Need url like - /1234/abc
        const data = res.params;
        res.body = data;
    }
    catch(error){
        console.log(error);
    }
} 

const getQuery = async (res) => {
    try{
        const data = res.request.query;
        res.body = data;
    }
    catch(error){
        console.log(error);
    }
} 

const sendReponse = async (res) => {
    try{
        const data = res.request.query;
        res.body = data;
    }
    catch(error){
        console.log(error);
    }
} 

module.exports = {getData, getId, getQuery, sendReponse}