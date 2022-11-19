import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { FullPost } from "./pages/FullPost";
import { Layout } from "./components/Layout";
import { Login } from './pages/Login';
import { Profile } from './pages/Profile';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/post/:id" element={<FullPost />} />
                </Route>
            </Routes>
        </>
    );

    // if (pathname === '/home') {
    //   return (
    //     <>
    //       <Header />
    //       <Home/>
    //     </>
    //   );
    // }
    // if (pathname === '/about') {
    //   return (
    //     <>
    //       <Header/>
    //       <About />
    //     </>
    //   );
    // }
    // if (pathname === '/login') {
    //   return (
    //     <>
    //       <Header/>
    //       <h3>Авторизоваться/Войти</h3>
    //     </>
    //   );
    // }
}

export default App;
