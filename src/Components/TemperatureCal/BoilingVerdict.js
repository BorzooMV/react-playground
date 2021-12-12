import React from "react";
import './TemperatureCal.css';

const BoilingVerdict = (props) => {
        return(
            <p>
                {props.temp >= 100 ? "Will Boil" : "Wont Boil"}
            </p>
        )
}

export default BoilingVerdict;