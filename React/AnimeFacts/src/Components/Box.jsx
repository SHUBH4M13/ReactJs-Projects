function Box( {children} ){
    return (
        <div className=" w-[380px] h-[380px] bg-white rounded-xl " > 
        {children}
        </div>
    )
}

export default Box;