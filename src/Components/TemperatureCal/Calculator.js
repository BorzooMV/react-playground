import React, { useState } from "react";
import BoilingVerdict from "./BoilingVerdict";
import './TemperatureCal.css';

const Calculator = () => {
    const [temperature, setTemperature] = useState('');
    const changeHandler = (e) => {
        setTemperature(e.target.value)
    }
    return(
        <>
            <input type="text" onChange={(e) => changeHandler(e)} />
            <p style={{
                fontSize:"12px",
                margin:"5px 0px"
            }}>
                Enter temperature in celcius to calculate if the water will boil
            </p>
            <BoilingVerdict temp={temperature} />
        </>
    )
}

export default Calculator;