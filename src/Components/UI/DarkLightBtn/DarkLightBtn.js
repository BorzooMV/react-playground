import React from "react";
import './DarkLightBtn.css';
import { DarkModeRounded, LightModeRounded } from "@mui/icons-material";

const DarkLightBtn = (props) => {
    let classText = `DarkLightBtn-${props.theme}`;
    
    return(
        <button type="button" className={classText}>
            {props.theme == 'dark' ? <LightModeRounded /> : <DarkModeRounded />}
        </button>
    )
}

export default DarkLightBtn;