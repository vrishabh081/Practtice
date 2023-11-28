import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [data, setData] = useState(null);
    const navigate = useNavigate();


    const submitHandler = async (e) => {
        e.preventDefault();
        try{
            const result = await fetch("http://localhost:8000/log-in", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {"Content-Type": "application/json"}
            });
            const jsonData = await result.json();
            localStorage.setItem("user", JSON.stringify(jsonData?.user))
            navigate("/");
        }
        catch(error){
            console.log(error);
        }
    }


    return <div id="form">
        <h1>Log in</h1>
        <form onSubmit={submitHandler}>
            <input type="email" placeholder="Email" onChange={(e) => setData({...data, email: e.target.value})} />
            <input type="password" placeholder="Password" onChange={(e) => setData({...data, password: e.target.value})} />
            <input type="submit" value={"Submit"} />
        </form>
    </div>;
};

export default Login;
