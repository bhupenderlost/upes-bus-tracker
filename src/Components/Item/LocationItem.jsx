import React from "react"


const LocationItem = (props) => {
    return(
        <div className="m-2 overflow-y-scroll">
            {props.data.map((item, index) => {
                    if(index < 3)
                        return(
                            <div key={item.vehicleRegistration} className="m-2 border-l-4 border-red-500 p-2">
                                <h2 className="text-xl font-semibold">
                                    {item.vehicleRegistration}
                                </h2>
                                <p>{JSON.parse(item.lastGpsInformation).address} At <strong>{JSON.parse(item.lastGpsInformation).gpsTimeStr}</strong></p>
                            </div>
                        )
                    
            })}
        </div>
    )
}
export default LocationItem