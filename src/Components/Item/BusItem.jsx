import React from "react"
import Card from "../Card/Card"
import { Link } from "react-router-dom"


const BusItem = (props) => {

    return(
        props.data.map((item) => {
            return(
                <Link to={`/location?id=${item._id}`}>
                    <Card style="w-[300px] flex flex-col p-2 hover:cursor-pointer hover:shadow-2xl">
                        <h1 className="text-3xl font-semibold m-2">
                            {item.routeName}
                        </h1>
                        <p className="ml-2 -mt-2 font-semibold">
                            {item.vehicleRegistration}
                        </p>
                        <div className="m-2 border-l-4 border-red-500 p-2">
                            <h2 className="text-xs font-semibold">
                                Start: {item.startPoint}
                            </h2>
                            <h2 className="text-xs font-semibold">
                                End: {item.endPoint}
                            </h2>
                            <h2 className="text-xs font-semibold">
                                Via: {item.viaPassPoints}
                            </h2>
                        </div>
                    </Card>
                </Link>
            )
        })
    )
}

export default BusItem