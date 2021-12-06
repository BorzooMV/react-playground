import React from "react";
import './Layout.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import Main from "../Main/Main";
const Layout = () => {
    return(
        <>
            <Header />
            <Sidebar />
            <Main />
            <Footer />
        </>
    )
}

export default Layout;