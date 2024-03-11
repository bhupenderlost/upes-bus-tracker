import React from "react";
import { signOut } from "../../Helpers/index";
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const navigate = useNavigate();

  const loggout = async () => {
    try {
      let auth = await signOut();
      if (auth) {
        return navigate("/login?logout=true");
      }
    } catch (err) {
      alert("Cannot Logout!");
    }
  };
  const closesidebar = () => {
    console.log("clicked");
    document.querySelector(".sidebar").classList.remove("open");
  }

  return (
    <div className="bg-[#1446A0] h-[80px] overflow-hidden">
      <img
        src={props.logo}
        className="w-[180px] h-[75px] float-left"
        alt="Logo"
      />
      <div
        className={`flex flex-row-reverse mx-4 my-4 ${
          props.login ? "visible" : "hidden"
        }`}
      >
        <button
            onClick={closesidebar}
          
          className=" text-white px-4 py-2 md:hidden rounded-md"
        >
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
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
