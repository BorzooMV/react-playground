import React from "react";
import './Main.css';
import Box from "../Box/Box";
import Calculator from "../TemperatureCal/Calculator";
import MassiveData from "../MassiveData/MassiveData";

const Main = () => {
    return(
        <main>
            <Box title="Temperature Calculator">
                <Calculator />
            </Box>

            <Box title="Page Loader">
                <MassiveData />
            </Box>
        </main>
    )
}

export default Main;