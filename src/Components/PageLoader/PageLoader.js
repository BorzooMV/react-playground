import React from "react";
import Loader from "react-loader-spinner";

const PageLoader = () => {
    return(
        <Loader
        type="TailSpin"
        color="#4eccd7"
        height={50}
        width={50}
      />
    )
}

export default PageLoader;