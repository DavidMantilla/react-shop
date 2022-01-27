import React from "react";
import Layout from "../container/Layout";
import Login from "../Pages/Login";
import Recovery from "../Pages/Recovery";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '@styles/global.css';
import Home from "../Pages/Home";
import NoEncontrado from "../Pages/NotFound";
import Myaccount from "../Pages/Myaccount";
import { Orders } from "../Pages/Orders";
import { MyOrder } from "../Pages/MyOrder";
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState.js"
const App = () => {
    const initialState= useInitialState();
    return (
        <AppContext.Provider value={initialState}>
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />		
                    <Route path="/recovery" element={<Recovery />} />
                    <Route path="/myaccount" element={<Myaccount />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/myorders" element={<MyOrder />} />

                    <Route path="*" element={<NoEncontrado />} />
                </Routes>
            </Layout>
        </BrowserRouter>
       
     </AppContext.Provider>

    );
}

export default App;