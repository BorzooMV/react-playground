import React from 'react'
import './Buttons.css'

const Btn = (props) => {
    return(
        <button className='Buttons' onClick={props.onClick}
                onMouseDown={props.onMouseDown}
                onMouseUp={props.onMouseUp}>
            {props.children}
        </button>
    )
}

export default Btn;