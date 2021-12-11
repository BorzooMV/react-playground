import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../Pages/Home/Home";
import Documentation from "../Pages/Documentation/Documentation";

const MainRouter = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/docs" element={<Documentation />} />
            </Routes>
        </BrowserRouter>
    )
}

export default MainRouter;