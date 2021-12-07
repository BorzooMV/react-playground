import React from "react";
import './Box.css';

const Box = (props) => {
    return(
        <div className="Box">
            {props.title &&
                <h2 style={{
                    borderBottom:"2px solid #eee",
                    paddingBottom:"5px"
                }}>{props.title}</h2>
            }
            {props.children}
        </div>
    )
}

export default Box;