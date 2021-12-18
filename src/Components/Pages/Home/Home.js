import React, { useState } from "react";
import Box from '../../Box/Box';
import Calculator from '../../TemperatureCal/Calculator';
import LazyPage from '../../LazyPage/LazyPage';
import LearnRef from "../../LearnRef/LearnRef";
import './Home.css';
import TextSelect from "../../TextSelect/TextSelect";

const Home = () => {
    const [boxes,setBoxes] = useState([
        {
            'title':"Boiling Temperature Calculator",
            "child":<Calculator />,
            "key" : "01"
        },
        {
            'title':"Page Loader",
            "child":<LazyPage />,
            "key" : "02"
        },
        {
            'title':"Learning Ref",
            "child":<LearnRef />,
            "key":"03"
        },
        {
            'title':"Text Select",
            'child':<TextSelect />,
            'key':"04"
        }
    ])
    return(
        <main>
            {
                boxes.map(box => {
                    return(
                        <Box title={box.title} key={box.key}>
                            {box.child}
                        </Box>
                    )
                })
            }
        </main>
    )
}

export default Home;