import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from '../pages/home'
import Login from '../pages/login'
import Register from '../pages/register'
import AddTodo from '../pages/addtodo'

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/add-todo' element={<AddTodo/>} />
        </Routes>
    )
}

export default AllRoutes
