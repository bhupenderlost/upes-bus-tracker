import React, { useEffect, useState } from "react"
import { ArrowPathIcon } from '@heroicons/react/24/solid'
import Base from "../Components/Base"
import Card from "../Components/Card/Card"
import { addBus, getBusById, updateBus } from "../Helpers"
import { useNavigate, useSearchParams } from "react-router-dom"

const Add = () => {

    const [data, setData] = useState({ })
    const [loading ,setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [message, setMessage] = useState(null)
    const [params, setParams] = useSearchParams()
    const navigate = useNavigate()

    useEffect(() => {
        if(params.has('id')) {
            getBusById(params.get('id'))
                .then((daa) => {
                    setData(daa.dbRes)
                })
                .catch(err => console.log(err))
        }
        if(params.has('success')) {
            if(params.get('success') === 'add') {
                setMessage("Successfully Added New Bus!")
            }
            if(params.get('success') === 'update') {
                setMessage("Successfully Updated Bus!")
            }
        }
    })
    const formSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        
        try {

            if(params.get('id')) {
                const update = await updateBus(data, params.get('id'))
                if(update.success) {
                    setData({ })
                    setLoading(false)
                    return navigate('/add-bus?success=update')
                }else {
                    setError(true)
                    setLoading(false)
                }
            }else {
                // let array = data.viaPassPoints.split(',')
                // setData({ ...data, viaPassPoints: array })
                const add = await addBus(data)
                if(add.success) {
                    setData({ })
                    setLoading(false)
                    return navigate('/add-bus?success=add')
                }else {
                    setError(true)
                    setLoading(false)
                }
            }
        }catch(err) {
            setLoading(false)
            setError(true)
        }
    }

    return(
        <Base>
            <Card style="h-[82vh] w-[1600px] flex flex-col  p-2">
                <h2 className="text-4xl font-bold ml-2 mt-2">
                    { params.has('id') ? 'Update Bus' : 'Add Bus'}
                </h2>
                { message ? <p className="ml-2 mt-2 text-sm text-green-600 font-semibold">{message}</p>: ''}
                <div className="m-5">
                    <form onSubmit={formSubmit} className="flex flex-col space-y-1">
                            <div className="container m-2 flex flex-col">
                                <label for="route" className="font-semibold text-sm p-2">Route Name *</label>
                                <input 
                                    onChange={(e) => setData({ ...data, routeName: e.target.value })} 
                                    type="text"
                                    id="route"
                                    value={data.routeName ? data.routeName : ''}
                                    placeholder="Eg- Route 2"
                                    className="w-[600px] h-[45px] pl-2 border-l-4 border-red-500 text-xl shadow hover: selection:box-border focus:outline-none" 
                                />
                            </div>
                            <div className="container m-2 flex flex-col">
                                <label className="font-semibold text-sm p-2">Vehicle Registration *</label>
                                <input 
                                    onChange={(e) => setData({ ...data, vehicleRegistration: e.target.value })} 
                                    type="text"
                                    value={data.vehicleRegistration ? data.vehicleRegistration : ''}
                                    placeholder="Eg- UK07PA8077"
                                    className="w-[600px] h-[45px] pl-2 border-l-4 border-red-500 text-xl shadow hover: selection:box-border focus:outline-none" 
                                />
                            </div>
                            <div className="container m-2 flex flex-col">
                                <label className="font-semibold text-sm p-2">Start Point *</label>
                                <input 
                                    onChange={(e) => setData({ ...data, startPoint: e.target.value })} 
                                    type="text"
                                    value={data.startPoint ? data.startPoint : ''}
                                    placeholder="Eg- Kandoli"
                                    className="w-[600px] h-[45px] pl-2 border-l-4 border-red-500 text-xl shadow hover: selection:box-border focus:outline-none" 
                                />
                            </div>
                            <div className="container m-2 flex flex-col">
                                <label className="font-semibold text-sm p-2">End Point *</label>
                                <input 
                                    onChange={(e) => setData({ ...data, endPoint: e.target.value })} 
                                    type="text"
                                    value={data.endPoint ? data.endPoint : ''}
                                    placeholder="Eg- Bidholi"
                                    className="w-[600px] h-[45px] pl-2 border-l-4 border-red-500 text-xl shadow hover: selection:box-border focus:outline-none" 
                                />
                            </div>
                            <div className="container m-2 flex flex-col">
                                <label className="font-semibold text-sm p-2">Via Pass Points</label>
                                <input 
                                    onChange={(e) => setData({ ...data, routeName: e.target.value })} 
                                    type="text"
                                    value={data.viaPassPoints ? data.viaPassPoints : ''}
                                    placeholder="Eg- Mandi Chowk, Balliwala, Ballupur ( Seperated By Comma )"
                                    className="w-[600px] h-[45px] pl-2 border-l-4 border-red-500 text-xl shadow hover: selection:box-border focus:outline-none" 
                                />
                            </div>
                            <div className="container m-2 flex flex-col">
                                <label className="font-semibold text-sm p-2">API Key *</label>
                                <input 
                                    onChange={(e) => setData({ ...data, apiKey: e.target.value })} 
                                    type="text"
                                    value={data.apiKey ? data.apiKey : ''}
                                    placeholder="Eg- ljut4k"
                                    className="w-[600px] h-[45px] pl-2 border-l-4 border-red-500 text-xl shadow hover: selection:box-border focus:outline-none" 
                                />
                            </div>
                        { error ? <p className="text-sm text-red-600">Error Occured! Make Sure You Have Filled All The Details!</p> : ''}
                        <button disabled={loading ? true : false} type="submit" className="btn w-[300px] h-[45px] bg-[#E9286D] text-center text-white text-xl uppercase m-2 hover:shadow-2xl flex justify-center items-center">
                            { params.has('id') ? 'Update' : 'Add Bus'} 
                            { !loading ? '' :
                                <ArrowPathIcon 
                                    className="ml-2 animate-spin" 
                                    width={30} 
                                    height={30} 
                                />
                            }
                        </button>
                    </form>
                </div>
            </Card>
        </Base>
    )
}

export default Add