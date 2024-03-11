import React from "react"


const Counter = (props) => {
    return(
        <div className="m-2 text-center">
           <h2 className="text-4xl font-bold">
            {props.value}
           </h2>
           <p>
            {props.title}
           </p>
        </div>
    )
}

export default Counter