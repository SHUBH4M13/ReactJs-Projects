import React from "react";

function Tasks(props){
    return(
        <div>
            <li className="flex justify-between ml-6 mr-6">
                <input type="checkbox"/>
                <p>{props.work}</p>
                <p>...</p>
            </li>
        </div>
    )
}

export default Tasks;