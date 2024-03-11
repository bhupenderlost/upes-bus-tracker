import React, { useEffect, useState } from "react"
import Base from "../Components/Base"
import StudentItem from "../Components/Item/StudentItem"
import Loader from "../Components/Loader/Loader"
import Card from "../Components/Card/Card"
import { getStudents } from "../Helpers"


const Student = () => {

    const [data, setData] = useState(null)
    const [error, setError] = useState(false)
    
    useEffect(() => {
        
        getStudents(1, 10)
            .then((data) => {
                setData(data.dbRes)
            })
            .catch(err => setError(true))
        
    }, [])

    const changePage = async (page) => {
        try {
            let student = await getStudents(page, 10)
            setData(data.dbRes)
        }catch(error) {
            setError(true)
        }
    }
    
    return(
        <Base>
            <Card style="h-[80vh] w-[1600px] flex-col flex -ml-2 p-2">
                {data ? <StudentItem data={data} /> : <Loader />}
                { !data ? '' :
                    <div className="flex flex-row justify-end">
                        <button disabled={!data.hasPrevPage ? true : false} onClick={() => changePage(data.prevPage, 10)} className="btn w-[80px] h-[20px] bg-[#E9286D] text-center rounded text-white text-sm m-2">
                            Previous
                        </button>
                        <button disabled={!data.hasNextPage ? true : false} onClick={() => changePage(data.nextPage, 10)} className="btn w-[80px] h-[20px] bg-[#E9286D] text-center rounded text-white text-sm m-2">
                            Next
                        </button>
                    </div>
                }
            </Card>
        </Base>
    )
}

export default Student