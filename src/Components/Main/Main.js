import React, { useState } from "react";
import './Main.css';
const Main = (props) => {
    return(
            <div class="Main" >
                {props.children}
            </div>
    )
}

export default Main;