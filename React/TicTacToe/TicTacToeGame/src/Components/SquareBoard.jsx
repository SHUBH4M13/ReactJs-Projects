const Squares = ( props) => {
    return(
        <div className=" h-[125px] w-[125px] border-black border-[4px] flex justify-center items-center cursor-pointer"  onClick={props.onClick} >
            <p className=" text-5xl text-black"> {props.value} </p>
        </div>
    )
}

export default Squares;