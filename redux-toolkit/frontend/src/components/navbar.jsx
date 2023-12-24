import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div style={{border:"5px solid", margin:"0.5rem", display:"flex", justifyContent:"space-between", padding:"0.5rem"}}>
            <h2><Link to={"/"}>Todo Todo</Link></h2>
            <h1><Link to={"/add-todo"}>Add Todo</Link></h1>
            <h2><Link to={"/"}>{JSON.parse(localStorage.getItem("user"))?.[0]?.name || "User name"}</Link></h2>
        </div>
    )
}

export default Navbar
