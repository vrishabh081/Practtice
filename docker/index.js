import Express from "express";
const app = Express();

app.use("/", async(req, res) => {
    try{
        return res.status(200).json(({
            data: "Hello world"
        }))
    }
    catch(error){
        console.log(error)
    }
})

app.listen(3000, () => {
    console.log("Server is running")
})