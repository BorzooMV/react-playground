import React, { useState, useEffect } from "react";
import PageLoader from "../PageLoader/PageLoader";

const MassiveData = () => {
    const [isLoad, setIsLoad] = useState(false);
    const onLoadHandler = () => {
        setIsLoad(true)
    }
    return(
        <>
            {!isLoad && <PageLoader />}
        </>
    )
}

export default MassiveData;