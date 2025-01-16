function Decrement( {onClick} ){
    return(
        <button className=" w-full h-[50px] rounded-bl-lg rounded-br-lg bg-blue-600 hover:bg-blue-700 text-white text-lg" onClick={onClick} > Decrement </button>
    )
}

export default Decrement;