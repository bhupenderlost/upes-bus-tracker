import React from "react"


const Card = (props) => {
    return(
        <div className={`bg-white rounded-xl shadow-xl  ${props.style}`}>
            {props.children}
        </div>
    )
}

export default Card