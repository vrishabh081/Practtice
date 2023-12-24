import React, { useCallback, useMemo } from 'react'
import {useFormik} from "formik"
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addTodo } from '../utils/asyncFun';

const initialValues = {
    task: "",
    active: false,
}

const validate = (values) => {
    let errors = {};
    
    if(!values.task){
        errors.task = "Task is required"
    }

    return errors
}

const AddTodo = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const data = useSelector((store) => store.todoReducer);

    const formik = useFormik({
        initialValues,
        validate,
        onSubmit: useCallback(({task}) => {
            dispatch(addTodo({method: "POST", url: "todos", data: {task, status: false}}))
            .then((res) => {
                navigate("/")
            })
        }, [dispatch])
    })

    return (
        <div style={{border:"1px solid", width:"450px", margin:'2rem auto', padding:"2rem", backgroundColor:"floralwhite", borderRadius:"1rem"}}>
            <h1 style={{textAlign:'center', marginBottom:"2rem"}}>Add Todo</h1>
            <form onSubmit={formik.handleSubmit}>
                <input type="text" name ="task" value={formik.values.task} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Type your task' style={{width:"90%", display:"block", margin:"0.5rem auto", borderRadius:"0.5rem", border:"1px solid black", padding:"0.6rem"}} />
                <span style={{textAlign:"center", display:"block", marginTop:"2rem"}}><Link to={"/"}>back</Link></span>
                <input type="submit" value={!data.isLoading ? "Add": "Wait..."} style={{width:"90%", display:"block", margin:" 2rem auto 0.5rem auto", borderRadius:"0.5rem", border:"1px solid black", padding:"0.6rem"}} />
                <span>{formik.errors.task && formik.touched.task ? formik.errors.task : ""}</span>
            </form>
        </div>
    )
}

export default AddTodo
