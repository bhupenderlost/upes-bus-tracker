import React, { useEffect, useState } from "react"
import Base from "../Components/Base"
import Card from "../Components/Card/Card"
import socketIO from 'socket.io-client'
import { getToken } from '../Helpers/index'
import { Link, useSearchParams } from "react-router-dom"


const Location = () => {

    const [data, setData] = useState(null)
    const [location, setLocation] = useState(null)
    const [join, setJoin] = useState(false)
    const [params, setParams] = new useSearchParams()

    useEffect(() => {

        const socket = socketIO.connect('http://localhost:8000', {
            extraHeaders: {
                'Authorization': `Bearer ${getToken()[2]}`
            }
        })
        socket.on('connect', () => {
            socket.emit('bus', params.get('id'))
        })
        socket.on("disconnect", () => {
            setJoin(false)
        })
        socket.on('joined', (data) => {
            setJoin(true)
        })

        socket.emit('location', params.get('id'))
        let map, marker;
        socket.on('locationsent', (item) => {
            let loc = JSON.parse(item)
            setData(loc)
            loc = JSON.parse(loc.lastGpsInformation)
            window.localStorage.setItem('lat', loc.latitude)
            window.localStorage.setItem('lng', loc.longitude)
            setLocation(loc)
            if(!marker) {
                marker = new window.mappls.Marker({
                    map: map,
                    id: `marker`,
                    position: [localStorage.getItem('lat') ? localStorage.getItem('lat') : 30.3165, localStorage.getItem('lng') ? localStorage.getItem('lng') : 78.0322],
                    fitbounds: true,
                    html: `<div style="white-space:nowrap;font-size:10px;color:#000; background: #fff; width: 60px;">${loc.name}</div>`,
                    icon_url: 'https://apis.mapmyindia.com/map_v3/1.png'
                })
            }else {
                marker.setPosition({ lat: loc.latitude, lng: loc.longitude})
                marker.getPosition()
                
            }
        }) 
       
        const interval = setInterval(() => {
            socket.emit('location', params.get('id'))      
        }, 5000)
        window.initMap1 = () => {
            map = new window.mappls.Map('map', {
              center: [30.3165, 78.0322],
              zoomControl: true,
              location: true
            })
        }
      
        const script = document.createElement('script')
        script.src = 'https://apis.mappls.com/advancedmaps/api/12f73c43d812cd0dc82f3e39b422f960/map_sdk?layer=vector&v=3.0&callback=initMap1'
        script.defer = true
        script.async = true
        document.head.appendChild(script)
       
        return () => {
            socket.disconnect()
            clearInterval(interval)
            window.localStorage.clear()
            document.head.removeChild(script);
        }
    }, [])
   
    return(
        <Base>
            <Card style="h-[80vh] w-[1600px] flex-col flex -ml-2 p-2">
                <h2 className="text-4xl font-bold ml-5">
                    Live Location 
                </h2>
               
                <p className="ml-5">{ join ? 'Status: Connected!' : 'Status: Disconnected'}</p>
                    <div className="flex flex-row flex-wrap gap-5 ml-5">
                        <h2 className="text-lg border-l-4 border-red-500 pl-2">
                            <strong>Route Name:</strong> {data ? data.routeName : ''}
                        </h2>
                        <h2 className="text-lg border-l-4 border-red-500 pl-2">
                            <strong>Registration Number:</strong> {data ? data.vehicleRegistration : ''}
                        </h2>
                        <h2 className="text-lg border-l-4 border-red-500 pl-2">
                            <strong>Last Address:</strong> {location ? location.address : ''}
                        </h2>
                        <h2 className="text-lg border-l-4 border-red-500 pl-2">
                            <strong>Last GPS Time:</strong> {location ? location.gpsTimeStr : ''}
                        </h2>
                        <h2 className="text-lg border-l-4 border-red-500 pl-2">
                            <strong>State Of Bus:</strong> {location ? location.statusStr : ''}
                        </h2>
                    </div>
                    <p className="ml-5 text-blue-600">
                            <Link to={`/add-bus?id=${data ? data._id : ''}`}>Edit Bus</Link>
                    </p>
                    <div id="map" className="w-full h-3/4 p-2">

                    </div>
            </Card>
        </Base>
    )
}

export default Location