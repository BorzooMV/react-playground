import React from "react";
import './SidebarBox.css'

const SidebarBox = (props) => {
    return(
        <div className="SidebarBox">
            {props.children}
        </div>
    )
}

export default SidebarBox;