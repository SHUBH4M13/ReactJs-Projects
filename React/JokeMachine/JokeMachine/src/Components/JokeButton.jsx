

function JokeBtn({onClick}){
    return(
        <button className=" flex justify-center items-center text-white  rounded-bl-lg rounded-br-lg w-full h-[50px] text-2xl bg-red-600 hover:bg-red-700" onClick = {onClick} >
            Change Joke
        </button>
    )
}

export default JokeBtn;