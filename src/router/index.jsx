import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/Main/Home'
import LifeService from '../pages/Main/LifeService'
import Shop from '../pages/Main/Shop'
import User from '../pages/Main/User'
import City from "../pages/City";
import Search from "../pages/Search";

import BottomNav from "../components/BottomNav";

const AppRouter = () => {
    return (
        <BrowserRouter>
            {/* <BottomNav /> */}
            <Routes>
                <Route path="/home/*" element={<Home />} />
                <Route path="/life" element={<LifeService />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/user" element={<User />} />
                <Route path="*" element={<Navigate to='home' />} />
                <Route path="/city/*" element={<City />} />
                <Route path="search/:keywords" element={<Search />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter