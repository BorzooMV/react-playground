import React, { useEffect, useRef, useState } from "react";
import './LearnRef.css';

const LearnRef = () => {
    const [name, setName] = useState('');
    // const [renderCount, setRenderCount] = useState(0);
    // useEffect(()=>{
    //     setRenderCount(prevRenderCount => prevRenderCount + 1);
    // },[name])
    const renderCount = useRef(1);
    useEffect(()=>{
        renderCount.current ++;
    });

    const btnClickHandler = () => {
        inputFocus.current.focus();
    }

    const inputFocus = useRef()

    return(
        <>
            <input ref={inputFocus} type="text" name="name" onChange={e => setName(e.target.value)} />
            <p>My name is <strong>{name}</strong></p>
            <p>I rendered {renderCount.current} time(s)</p>
            <button class="btnFocus" type="button" onClick={()=>btnClickHandler()}>Focus on the input</button>
        </>
    )
}

export default LearnRef;