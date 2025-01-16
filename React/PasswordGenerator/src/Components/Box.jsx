import { useState, useCallback, useEffect , useRef } from "react";
import Heading from "./heading";

function Box() {

    const [length, setlength] = useState(8);
    const [isNumberAllowed, setisNumberAllowed] = useState(false);
    const [isUppercase, setUppercase] = useState(false);
    const [isLowercase, setLowercase] = useState(false);
    const [isSymbolsAllowed, setisSymbolsAllowed] = useState(false);
    const [password, setpassword] = useState(null);

    const passref = useRef(null);

    const passwordgenerator = useCallback( () => {
            let password = "";
            let str = "";
            const number = `1234567890`;
            const Uppercase = `QWERTYUIOPLKJHGFDSAZXCVBNM`;
            const Lowercase = `qwertyuioplkjhgfdsazcvbnm`;
            const sym = `!@#$%^&*(){}=`;

            if (isNumberAllowed) str += number
            if (isUppercase) str += Uppercase
            if (isLowercase) str += Lowercase
            if (isSymbolsAllowed) str += sym

            for ( let i = 0; i < length; i++) {
                let randomIndex = Math.floor(Math.random() * str.length + 1);
                password += str.charAt(randomIndex)
            }
            setpassword(password);
        }

    , [length, isNumberAllowed, isUppercase, isLowercase, isSymbolsAllowed, setpassword])


    useEffect(() => {
        passwordgenerator();
    }, [length, isNumberAllowed, isUppercase, isLowercase, isSymbolsAllowed, setpassword])

    const copypass = useCallback ( () => {
        window.navigator.clipboard.writeText(password)
    }, [password])

    return (
        <>
            <div className=" w-[550px] h-[350px] bg-white rounded-lg " >
                <div className=" w-full h-[25px] flex items-center justify-center flex-grow">
                    <input type="text" value = {password} readOnly className=" mt-[55px] w-auto h-[45px] bg-slate-100 rounded-md border-solid border-2 text-center border-red-700" />
                    <button className="mt-[55px] ml-[10px] w-[90px] h-[40px] bg-red-600 hover:bg-red-700 text-white rounded-lg" onClick={copypass}>Copy</button>
                </div>

                <Heading />
                <div className=" flex flex-col justify-center items-center mt-6 ">
                    <div className=" flex justify-evenly items-center ">
                        <input type="range" max={100} min={1} value={length} onChange={(e) => {
                            setlength(e.target.value)
                        }} />
                        <label className=" ml-5 "> Length </label>
                        <label className=" ml-5 " > {length} </label>
                    </div>
                    <div className=" flex flex-col mt-5 ">

                        <div> <input
                            type="checkbox"
                            defaultChecked={isNumberAllowed}
                            id="numberinput"
                            onChange={() => {
                                setisNumberAllowed((prev) => !prev)
                            }} />
                            <label className=" ml-5 "> Numbers </label>
                        </div>

                        <div className=" mt-3 " >
                            <input type="checkbox"
                                defaultChecked={isUppercase}
                                id="uppe rcaseinput"
                                onChange={() => {
                                    setUppercase((prev) => !prev)
                                }} />
                            <label className=" ml-5 " > Uppercase </label>
                        </div>

                        <div className=" mt-3 "  >
                            <input type="checkbox"
                                defaultChecked={isLowercase}
                                id="Lowercaseinput"
                                onChange={() => {
                                    setLowercase((prev) => !prev)
                                }} />
                            <label className=" ml-5 "  > Lowercase </label>
                        </div>

                        <div className=" mt-3 ">
                            <input type="checkbox"
                                defaultChecked={isSymbolsAllowed}
                                id="symbolinput"
                                onChange={() => {
                                    setisSymbolsAllowed((prev) => !prev)
                                }} />
                            <label className=" ml-5 " > Symbols </label>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Box;