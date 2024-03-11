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

    return (
      <Base>
        <h2 className="text-4xl font-bold ml-5">
          {getAuthToken().user.firstName}, Welcome To Your Dashboard!
        </h2>
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center md:justify-start md:gap-8 md:mt-10">
          <Card style="h-[550px] w-[100%] md:w-[calc(50% - 4rem)] items-center p-2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold ml-2 mt-2 mb-10">
              Last Locations Of Buses
            </h2>
            {bus ? <LocationItem data={bus} /> : <Loader />}
            <Link className="text-blue-700 mt-auto ml-auto mr-5" to="/buses">
              View All
            </Link>
          </Card>
          <Card style="h-[550px] w-[100%] md:w-[calc(50% - 4rem)] items-center p-2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold ml-2 mt-2 mb-10">Students</h2>
            <div className="overflow-y-scroll">
              {student ? <StudentItem data={student} /> : <Loader />}
            </div>
            <Link className="text-blue-700 mt-auto ml-auto mr-5" to="/students">
              View All
            </Link>
          </Card>
          <Card style="h-[550px] w-[100%] md:w-[calc(33.33% - 6rem)] items-center p-2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold ml-2 mt-2 mb-10 ">Statistics</h2>
            <div className="m-2 flex flex-col space-y-20">
              <Counter value="20" title="Online Now" />
              <Counter
                value={student ? student.totalDocs * student.totalPages : 0}
                title="Students"
              />
              <Counter value={bus ? bus.length : 0} title="Buses" />
            </div>
          </Card>
        </div>
      </Base>
    );
}

export default Dashboard