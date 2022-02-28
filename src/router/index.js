import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import LifeService from '../pages/LifeService'
import Shop from '../pages/Shop'
import User from '../pages/User'

import BottomNav from "../components/BottomNav";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <BottomNav />
            <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/life" element={<LifeService />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/user" element={<User />} />
            <Route path="/*" element={<Navigate to='/home' />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter