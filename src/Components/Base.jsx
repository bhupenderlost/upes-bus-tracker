import React from "react"
import { 
    HomeIcon, 
    TruckIcon, 
    UserGroupIcon, 
    PlusIcon 
} from '@heroicons/react/24/solid'
import { 
    getToken 
} from "../Helpers"
import Sidebar from "./Sidebar/Sidebar"
import Logo from '../Assets/Images/upesfull.png'
import Navbar from "./Navbar/Navbar"

const Base = (props) => {


    const menuItems = [
        {
            title: 'Dashboard',
            url: '/dashboard',
            icon: <HomeIcon width={30} height={30} className="text-inherit"/>
        },
        {
            title: 'Buses',
            url: '/buses',
            icon: <TruckIcon width={30} height={30} className="text-inherit"/>
        },
        {
            title: 'Students',
            url: '/students',
            icon: <UserGroupIcon width={30} height={30} className="text-inherit"/>
        },
        {
            title: 'Add Bus',
            url: '/add-bus',
            icon: <PlusIcon width={30} height={30} className="text-inherit"/>
        },

    ]

    return(
        <div>
            <Navbar
                logo={Logo}
                login={getToken()[2] ? true : false}
            />
            <div className="bg-[#F3F3F3] flex flex-row gap-5 justify-start">
                <Sidebar 
                    items={menuItems}
                />
                <main className="bg-[#F3F3F3] flex flex-col ml-10 mt-10">
                    {props.children}
                </main>
            </div>
        </div>
    )
}

export default  Base