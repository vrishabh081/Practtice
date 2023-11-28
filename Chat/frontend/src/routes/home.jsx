import React, { useEffect, useState } from 'react'
import {io} from "socket.io-client";

const socketServer = "http://localhost:8080";

const Home = () => {
    const [data, setData] = useState(JSON.parse(localStorage.getItem("user")));
    const [socket, setSocket] = useState(null);

    const [users, setUsers] = useState({list: [], online: []})

    useEffect(() => {
        setSocket(io(socketServer));
    }, [])

    useEffect(() => {
        socket?.emit("addUser", (data?.email));
        socket?.on("getUsers", (user) => {
            setUsers((prev) => ({
                ...prev,
                online: user
            }))
        })
    }, [socket])

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = async () => {
        try{
            const result = await fetch("http://localhost:8000/get-users");
            const jsonData = await result.json();
            setUsers((prev) => ({
                ...prev,
                list: jsonData?.user
            }))
        }
        catch(error){
            console.log(error);
        }
    }


    console.log(users)

  return (
    <div>
     <h1>Socket Testing</h1> 
     <h2>Users Listing</h2>
        {
            users?.list?.map((el, index) => <div key={index}>
                <p style={{color: users?.online?.some((curr) => curr.userId === el.email) ? "green" : "red"}}><span>{index+1}</span> {el?.name}</p>
            </div>)
        }
    </div>
  )
}

export default Home
