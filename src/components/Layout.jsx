import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router";

export const Layout = () => {
    return <>
        <Header />
        <div className="content">
            <Outlet />
        </div>
        <Footer />
    </>
}