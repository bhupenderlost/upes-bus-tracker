import React from "react"
import { Link } from "react-router-dom"


const Sidebar = (props) => {
    return(
        <aside className="h-screen bg-[#121619] flex-col w-[100px]">
            {props.items.map((item) => {
                return(
                    <Link to={item.url} key={item.url} className="w-full h-20 text-center text-white hover:bg-white hover:text-black flex flex-col justify-center items-center hover: transition-all">
                        {item.icon}
                        {item.title}
                    </Link>
                )
            })}
        </aside>
    )
}

export default Sidebar