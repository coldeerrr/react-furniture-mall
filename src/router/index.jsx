/* import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/Main/Home'
import LifeService from '../pages/Main/LifeService'
import Shop from '../pages/Main/Shop'
import User from '../pages/Main/User'
import City from "../pages/City";
import Search from "../pages/Search";

import Layout from "../pages/Main/Layout";

const otherRouter = [
    { path: 'city', element: < City /> },
    { path: 'search/:keywords', element: <Search /> },
];

const mainRouter = [
    { path: "home", element: <Home /> },
    { path: "life", element: <LifeService /> },
    { path: "shop", element: <Shop /> },
    { path: "user", element: <User /> },
    { path: "*", element: <Navigate to='home' /> },
];

const AppRouter = (props) => {
    return (
        <Routes>
            { otherRouter.map(item => <Route path={item.path} element={item.element} key={item.path}/> ) }
            <Layout>
            { mainRouter.map(item => <Route path={item.path} element={item.element} key={item.path}/> ) }
            </Layout>
        </Routes>
    )
}

export default AppRouter */

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
                <Route path="/home" element={<Home />} />
                <Route path="/life" element={<LifeService />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/user" element={<User />} />
                <Route path="*" element={<Navigate to='home' />} />
                <Route path="/city" element={<City />} />
                <Route path="search/:keywords" element={<Search />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter