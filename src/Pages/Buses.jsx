import React, { useEffect, useState } from "react"
import Base from "../Components/Base"
import { getBuses } from "../Helpers"
import BusItem from "../Components/Item/BusItem"
import { useSearchParams } from "react-router-dom"



const Buses = () => {

    const [data, setData] = useState(null)
    const [error, setError] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams()
    
    useEffect(() => {
        
        getBuses()
            .then((data) => {
                setData(data.dbRes)
            })
            .catch(err => setError(true))
        
    }, [searchParams])
    
    return(
        <Base>
            <div className="flex flex-row flex-wrap gap-10 overflow justify-start">
                { data ? <BusItem data={data} /> : <h1>An Error Occured!</h1>}              
            </div>
        </Base>
    )
}

export default Buses