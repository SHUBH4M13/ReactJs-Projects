function Box({ children }) {
    return (
        <div className=" w-[400px] h-[350px] rounded-xl bg-white ">
            {children}
        </div>
    );
}

export default Box;