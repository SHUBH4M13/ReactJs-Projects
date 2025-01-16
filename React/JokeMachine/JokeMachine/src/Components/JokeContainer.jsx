import { useState, useEffect } from "react";
import JokeBtn from "./JokeButton";
const URL = `https://v2.jokeapi.dev/joke/Dark?blacklistFlags=nsfw,religious,political,racist,sexist,explicit`


function JokeContainer() {

    const [joke, setJoke] = useState("joke");
    const [next, setNext] = useState(0);


    useEffect(() => {
        const getjoke = async () => {
            try {
                const response = await fetch(URL);
                const newJoke = await response.json();
                if(  newJoke.type === "single"){
                    setJoke(newJoke.joke)
                } else if (newJoke.type === "twopart") {
                    setJoke(`${newJoke.setup} - ${newJoke.delivery}`); 
                }
            } catch (error) {
                console.log(error);
         
          }
        }
        getjoke();
    }, [next])

    const handleClick = () => {
        setNext(next + 1)
    }


    return (

        <>
            <div className=" w-full h-[250px] flex justify-center items-center"> 
            <h2 className="text-2xl p-6 ">{joke || "Loading..."}</h2>
            </div>
            <JokeBtn onClick={handleClick} />
        </>
    )
}

export default JokeContainer;