import React from "react"


const StudentItem = (props) => {
    return(
        props.data.docs.map((item) => {
            return(
                <div className="m-2 border-l-4 border-red-500 p-2">
                    <h2 className="text-xl font-semibold">
                        {item.firstName}  {item.lastName}
                    </h2>
                    <p>SAPID: {item.sapId}</p>
                    <p>Boarding: {item.boardingPoint}</p>
                    <p>Course: {item.courseName}</p>
                    <p>Semester: {item.semester}</p>
                </div>
            )
        })
    )
}

export default StudentItem