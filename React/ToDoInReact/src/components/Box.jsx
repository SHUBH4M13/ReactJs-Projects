import React from "react";

function Box( {children}){
    return(
        <div className="w-[400px] h-[400px] rounded-lg bg-white">
            {children}
        </div>
    )
}

export default Box;