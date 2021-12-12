import React, { Suspense,lazy } from "react";
import './Layout.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import Main from "../Main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLoader from "../PageLoader/PageLoader";

const Layout = () => {

    const Home = lazy(()=> import('../Pages/Home/Home'));
    const Documentation = lazy(()=> import('../Pages/Documentation/Documentation'));
    return(
        <>
            <Suspense fallback={<PageLoader />}>
                <BrowserRouter>
                    <Header />
                    <Sidebar />
                    <Main>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/docs" element={<Documentation />} />
                        </Routes>
                    </Main>
                    <Footer />
                </BrowserRouter>
            </Suspense>
        </>
    )
}

export default Layout;