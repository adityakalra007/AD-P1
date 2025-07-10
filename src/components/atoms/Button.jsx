

export const Button = ({children,onClick}) =>{
    return (
        <>
            <button className="px-5 py-3 bg-green-500 hover:bg-green-800 m-1 transition cursor-pointer rounded-xl shadow-md" onClick={onClick}>{children}</button>
        </>
    )
}