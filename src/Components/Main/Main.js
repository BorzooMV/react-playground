import React, { useState } from "react";
import './Main.css';
import Home from "../Pages/Home/Home";
import Documentation from "../Pages/Documentation/Documentation";
import MainRouter from "../Router/MainRouter";
const Main = () => {
    return(
            <div class="Main" >
                <MainRouter />
            </div>
    )
}

export default Main;