import { useEffect, useState } from "preact/hooks";
import { socket } from "../socket";

const Test1 = () => {
    const [data, setData] = useState({
        value: "",
        message: []
    })

    useEffect(() => {
        socket.on("test1", (text) => {
            setData((prev) => ({
                ...prev,
                message: [...prev.message, text]
            }))
        })

        return () => {
            socket.off("test1")
        }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        socket.emit("test1", data.value)
        setData({...data, value: ""})
    }

    console.log(data.message)

    return <div>
        <h1>Test 1 socket</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Write your message" value={data.value} onChange={(e)=> setData({...data, value: e.target.value})} />
            <input type="submit" value="Submit" />
        </form>
    </div>
}

export default Test1; 