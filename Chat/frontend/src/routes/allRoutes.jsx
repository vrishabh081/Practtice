import React from 'react'
import Login from './logIn'
import Home from './home'
import { Route, Routes } from 'react-router-dom'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/log-in" element = {<Login/>} />
    </Routes>
  )
}

export default AllRoutes
