import { useState, useEffect } from "react";
import Increment from "./Increment";
import Decrement from "./decrement";

function Counter() {

    const [cnt, setcnt] = useState(0);
    const [isOn , SetOn] = useState(false);

    const settingOn = () => {
        SetOn(!isOn);
    }

    useEffect( () => {
        console.log("Hello User")

        return () => {
            console.log("Bye User")
        } 
    } , [isOn]);

    const handleIncremnet = () => {
        setcnt(cnt + 1);
    }

    const handleDecremnet = () => {
        if (cnt <= 0) {
            setcnt(0)
        } else {
            setcnt(cnt - 1);
        }
    }


    const oddeven = (cnt) => {
        if (cnt == 0) {
            return
        }
        else if (cnt % 2 == 0) {
            return <h1>Even</h1>
        } else {
            return <h1> ODD </h1>
        }
    }

    return (

        <>
            <div className=" bg-black w-20 flex justify-center ">
                <button className= {` bg-red-700 text-white ${ isOn ? "bg-green-400" : "bg-red-700" }`} onClick={settingOn}>Toggle ON/OFF</button>
            </div>
            <div className=" w-full h-[250px] bg-white rounded-tl-lg rounded-tr-lg ">
                <div className=" w-full h-full flex justify-center items-center text-8xl text-black">
                    {cnt}
                </div>
            </div>
            <>
                <div className="mt-4">{oddeven(cnt)}</div>
                <Increment onClick={handleIncremnet} />
                <Decrement onClick={handleDecremnet} />
            </>
        </>
    );
}

export default Counter;
