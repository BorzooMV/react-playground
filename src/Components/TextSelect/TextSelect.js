import React,{ useRef } from 'react';
import Btn from '../UI/Buttons/Btn';
import './TextSelect.css';

const TextSelect = () => {
    const textRef = useRef()
    const mouseDownHandler = () => {
        textRef.current.classList.add('active');
    }

    const mouseUpHandler = () => {
        textRef.current.classList.remove('active');
    }

    return(
        <div className="TextSelect">
            <h4>Find my name in the text bellow</h4>
            <Btn onMouseDown={mouseDownHandler} onMouseUp={mouseUpHandler}>Press & Hold</Btn>
            <div className='text' ref={textRef} >
            <p>
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                Vestibulum tortor quam,<span>Borzoo</span> feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam 
                egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper
                pharetra. Vestibulum erat wisi, condimentum sed, commodo <span>Borzoo</span>vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum,
                eros ipsum rutrum orci, sagittis<span>Borzoo</span> tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque
                id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat.<span>Borzoo</span> Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus
                metus
                </p>
            </div>
        </div>
    )
}

export default TextSelect;