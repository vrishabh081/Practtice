import { socket } from "../socket";
import {useEffect, useState} from "preact/hooks";

const Dashboard = () => {
    const [data, setData] = useState({
        value: "",
        message: []
    })

    useEffect(() => {
        socket.on("message", (text) => {
            setData((prev) => ({
                ...prev,
                message: [...prev.message, text]
            }))
        })

        return () => {
            socket.off("message")
        }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        socket.emit("message", data.value)
        setData({...data, value: ""})
    }

    console.log(data.message);


    return <div>
        <h1>Dashboard</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Write your message" value={data.value} onChange={(e)=> setData({...data, value: e.target.value})} />
            <input type="submit" value="Submit" />
        </form>
    </div>
}

export default Dashboard;