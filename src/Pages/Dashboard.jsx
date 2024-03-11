import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import Base from "../Components/Base"
import Card from "../Components/Card/Card"
import { getAuthToken, getBuses, getStudents } from "../Helpers"
import LocationItem from "../Components/Item/LocationItem"
import StudentItem from "../Components/Item/StudentItem"
import Counter from "../Components/Counter/Counter"
import Loader from "../Components/Loader/Loader"

const Dashboard = () => {

    const [bus, setBus] = useState(null)
    const [buserr, setBusErr] = useState(false)
    const [student, setStudent] = useState(null)
    const [stderr, setStdErr] = useState(false)

    
    useEffect(() => {
        getBuses()
            .then((data) => {
                setBus(data.dbRes)
            })
            .catch(err => setBusErr(true))
        
        getStudents(1, 3)
            .then((data) => setStudent(data.dbRes))
            .catch(err => setStdErr(true))
    }, [])

    return(
        <Base>
            <h2 className="text-4xl font-bold ml-5">
                {getAuthToken().user.firstName}, Welcome To Your Dashboard!
            </h2>
            <div className="flex flex-row flex-wrap justify-start gap-16 mt-10">
                <Card style="h-[550px] w-[500px] items-center p-2">
                    <h2 className="text-3xl font-bold ml-2 mt-2 mb-10">
                       Last Locations Of Buses
                    </h2>
                    { bus ? <LocationItem data={bus} /> : <Loader />}
                    <Link className="float-right text-blue-700 m-5" to="/buses">View All</Link>
                </Card>
                <Card style="h-[550px] w-[500px] items-center p-2 ml-8">
                    <h2 className="text-3xl font-bold ml-2 mt-2 mb-10">
                       Students
                    </h2>
                    <div className="m-2 overflow-y-scroll">
                        { student ? <StudentItem data={student}/> : <Loader />}
                    </div>
                    <Link className="float-right text-blue-700 m-5" to="/students">View All</Link>
                </Card>
                <Card style="h-[550px] w-[250px] items-center p-2 ml-10">
                    <h2 className="text-3xl font-bold ml-2 mt-2 mb-10 ">
                       Statistics
                    </h2>
                    <div className="m-2 flex flex-col space-y-20">
                        <Counter 
                            value="20"
                            title="Online Now"
                        />
                        <Counter 
                            value={student ? student.totalDocs * student.totalPages : 0}
                            title="Students"
                        />
                        <Counter 
                            value={bus ? bus.length : 0}
                            title="Buses"
                        />
                    </div>
                </Card>
            </div>
        </Base>
    )
}

export default Dashboard