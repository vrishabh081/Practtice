import React, { useCallback, useMemo } from 'react'
import {useFormik} from "formik"
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../toolkit/authSlice';
import { useNavigate } from 'react-router-dom';

const initialValues = {
    name: "",
    email: "",
    password: ""
}

const validate = (values) => {
    let errors = {};
    
    if(!values.name){
        errors.name = "Name is required"
    }
    if(!values.email){
        errors.email = "Email is required"
    }
    if(!values.password){
        errors.password = "Password is required"
    }

    return errors
}

const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const data = useSelector((store) => store.authReducer);

    // Memoize the data to avoid unnecessary re-renders
    const memoizedData = useMemo(() => data, [data]);
    console.log('data------->', memoizedData);

    const formik = useFormik({
        initialValues,
        validate,
        onSubmit: useCallback(({name, email, password}) => {
            dispatch(registerUser({name, email, password}))
            .then((res) => {
                alert("Successfully signed up");
                navigate("/login")
            })
        }, [dispatch])
    })

    return (
        <div style={{border:"1px solid", width:"450px", margin:'2rem auto', padding:"2rem", backgroundColor:"floralwhite", borderRadius:"1rem"}}>
            <h1 style={{textAlign:'center', marginBottom:"2rem"}}>Register</h1>
            <form onSubmit={formik.handleSubmit}>
                <input type="text" name ="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Type your name' style={{width:"90%", display:"block", margin:"0.5rem auto", borderRadius:"0.5rem", border:"1px solid black", padding:"0.6rem"}} />
                <input type="email" name ="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Type your email' style={{width:"90%", display:"block", margin:"0.5rem auto", borderRadius:"0.5rem", border:"1px solid black", padding:"0.6rem"}} />
                <input type="password" name ="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Type your password' style={{width:"90%", display:"block", margin:"0.5rem auto", borderRadius:"0.5rem", border:"1px solid black", padding:"0.6rem"}} />
                <input type="submit" value={!data.isLoading ? "Register": "Wait..."} style={{width:"90%", display:"block", margin:" 2rem auto 0.5rem auto", borderRadius:"0.5rem", border:"1px solid black", padding:"0.6rem"}} />
                <span>{formik.errors.name && formik.touched.name ? formik.errors.name : ""}, {formik.errors.email && formik.touched.email ? formik.errors.email : ""}, {formik.errors.password && formik.touched.password ? formik.errors.password : ""}</span>
            </form>
        </div>
    )
}

export default Register
