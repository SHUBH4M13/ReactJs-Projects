function Increment( {onClick} ) {
    return(
        <button className=" w-full h-[50px]  bg-orange-600 hover:bg-orange-700 text-white text-lg"  onClick = {onClick}> Increment </button>
    )
}

export default Increment;