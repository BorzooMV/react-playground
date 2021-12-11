import React, { useEffect, useState } from "react";
import PageLoader from '../PageLoader/PageLoader';
const LazyPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=>{
       setTimeout(()=>{
           setIsLoading(false);
       },2000)
    },[])

    if(isLoading){
        return <PageLoader />
    }else{
        return <img src="https://picsum.photos/300/300" />
    }
}

export default LazyPage;