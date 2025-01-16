function Box( {children}) {
    return (<div className=" w-[500px] h-[350px] bg-slate-300 rounded-3xl">
        {children}
    </div>
    )
}

export default Box;