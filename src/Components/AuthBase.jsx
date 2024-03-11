import React from "react"
import Logo from '../Assets/Images/upesfull.png'
import Navbar from "./Navbar/Navbar"
import { getToken } from "../Helpers"

const AuthBase = (props) => {
    return(
        <div className="h-screen bg-[#F3F3F3]">
            <Navbar 
                logo={Logo} 
                login={getToken()[2] ? true : false } 
                />
            <div className="flex items-center justify-center bg-inherit m-4 h-[500px]  ">
               {props.children}
            </div>
        </div>
    )
}

export default AuthBase