import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/Main/Home'
import LifeService from '../pages/Main/LifeService'
import Shop from '../pages/Main/Shop'
import User from '../pages/Main/User'
import City from "../pages/City";

import Layout from "../pages/Main/Layout";

import BottomNav from "../components/BottomNav";

const AppRouter = (props) => {
    return (
        <BrowserRouter>
            <BottomNav />
            <Routes>
                <Route path="home" element={<Home />} />
                <Route path="life" element={<LifeService />} />
                <Route path="shop" element={<Shop />} />
                <Route path="user" element={<User />} />
                <Route path="*" element={<Navigate to='home' />} />
                <Route path="city" element={<City />} />
            </Routes>
            {/* <Routes>
                <Route path="city" element={<City />} />
                <Layout path="/">
                    <BottomNav />
                    <Routes>
                        <Route path="home" element={<Home />} />
                        <Route path="life" element={<LifeService />} />
                        <Route path="shop" element={<Shop />} />
                        <Route path="user" element={<User />} />
                        <Route path="*" element={<Navigate to='home' />} />
                    </Routes>
                </Layout>
            </Routes> */}
        </BrowserRouter>
    )
}

export default AppRouter