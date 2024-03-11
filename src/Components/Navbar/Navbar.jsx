import React from "react"
import { signOut } from '../../Helpers/index'
import { useNavigate } from "react-router-dom"
const Navbar = (props) => {
    const navigate = useNavigate()
    const loggout = async() => {
        try {
            let auth = await signOut()
            if(auth) {
                return navigate('/login?logout=true')
            }

        }catch(err) {
            alert("Cannot Loggout!")
        }
    }
    return(
        <div 
            className=" bg-[#1446A0] h-[80px] overflow-hidden"
        >
            <img 
                src={props.logo} 
                className="w-[180px] h-[75px] float-left" 
            />
            <div className={`float-right mx-4 my-4 flex flex-row ${props.login ? 'visible': 'hidden'}`}>
                {/* <UserCircleIcon 
                    width={40} 
                    height={40} 
                    color="#fff" 
                /> */}
                <p onClick={loggout} className="text-white font-semibold text-lg mt-2 hover:tracking-widest hover:cursor-pointer hover:transition-all transition-all">LOGOUT</p>
            </div>
        </div>
    )
}

export default Navbar