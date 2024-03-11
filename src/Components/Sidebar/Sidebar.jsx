import {React, useState, useEffect} from "react"

import { Link } from "react-router-dom"


const Sidebar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 768) {
      setIsOpen(true);
      document.querySelector(".sidebar").style.width = "8rem !important";
    }
  }, []); 

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <aside
      className={`sidebar  bg-[#121619] md:w-20 ${
        isOpen ? " w-96" : "w-[0px]"
      } flex-col overflow-hidden`}
      style={{
        width: isOpen ? "38rem" : "0px",
      }}
    >
      <button
        onClick={toggleSidebar}
        className="h-12 w-12 text-white absolute top-5 right-5 md:hidden"
      ></button>
      {props.items.map((item) => {
        return (
          <Link
            to={item.url}
            key={item.url}
            className="w-full h-20 text-center text-white hover:bg-white hover:text-black flex flex-col justify-center items-center hover: transition-all"
          >
            {item.icon}
            {isOpen && <span className=" md:block">{item.title}</span>}
          </Link>
        );
      })}
    </aside>
  );
}

export default Sidebar