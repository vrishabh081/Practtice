import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const bc = new BroadcastChannel("log_ot");
  const naviagte = useNavigate();

  const LogOut = () => {
    bc.postMessage("Log Out");
    naviagte("/login");
  }

  bc.onmessage = (event) => {
    if(event.data === "Log Out"){
      naviagte("/login")
    }
  }



  return (
    <div style={{display:"flex", justifyContent:"space-between", gap:"2rem", fontSize:"2rem"}}>
        <Link to={"/"} >Home</Link>
        <Link to={"/normal"} >Normal</Link>
        <Link to={"/rq"} >RQ</Link>
        <Link to={"/multi-query"} >Multi Query</Link>
        <Link to={"/login"} onClick={() => LogOut()}>Log out</Link>
    </div>
  )
}

export default Navbar
