import React from "react";
import Layout from "../container/Layout";
import Login from "../Pages/Login";
import Recovery from "../Pages/Recovery";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../styles/global.css';
import Home from "../Pages/Home";
import NoEncontrado from "../Pages/NotFound";
import Myaccount from "../Pages/Myaccount";

const App = () => {

    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />		
                    <Route path="/recovery" element={<Recovery />} />
                    <Route path="/myaccount" element={<Myaccount />} />
                    <Route path="*" element={<NoEncontrado />} />
                </Routes>
            </Layout>
        </BrowserRouter>

    );
}

export default App;