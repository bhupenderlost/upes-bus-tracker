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
        title: "Dashboard",
        url: "/dashboard",
        icon: <HomeIcon width={30} height={30} className="text-inherit" />,
      },
      {
        title: "Buses",
        url: "/buses",
        icon: <TruckIcon width={30} height={30} className="text-inherit" />,
      },
      {
        title: "Students",
        url: "/students",
        icon: <UserGroupIcon width={30} height={30} className="text-inherit" />,
      },
      {
        title: "Add Bus",
        url: "/add-bus",
        icon: <PlusIcon width={30} height={30} className="text-inherit" />,
      },
      {
        title: "Logout",
        url: "/login",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
            />
          </svg>
        ),
      },
    ];

    return(
        <div>
            <Navbar
                logo={Logo}
                login={getToken()[2] ? true : false}
            />
            <div className="bg-[#F3F3F3] flex flex-row md:gap-5 justify-start">
                <Sidebar 
                    items={menuItems}
                />
                <main className="bg-[#F3F3F3] flex flex-col md:ml-10 md:mt-10">
                    {props.children}
                </main>
            </div>
        </div>
    )
}

export default  Base