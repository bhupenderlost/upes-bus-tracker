const Bus = require('../models/bus')
const { getGpsData } = require('../utils/gps')

exports.updateBus = async (req, res) => {
    try {
        if(req.auth.user.role !== "admin") {
            return res.status(401).json({
                error: true,
                message: "Permisison Denied!"
            })
        }
        const update = req.body
        const {
            busId
        } = req.params
        const bus = await Bus.findOneAndUpdate(
            { _id: busId },
            update,
            { new: true }
        )
        res.json({
            success: true,
            message: `Updated Bus ID: ${busId}`,
            dbRes: bus
        })
    }catch(err) {
        console.log(err)
        res.status(400).json({
            error: true,
            message: err
        })
    }
}

exports.deleteBus = async (req, res) => {
    try {
        if(req.auth.user.role !== "admin") {
            return res.status(401).json({
                error: true,
                message: "Permisison Denied!"
            })
        }
        const {
            busId
        } = req.params
        const bus = await Bus.deleteOne(
            { _id: busId }
        )
        res.json({
            success: true,
            message: `Deleted Bus ID: ${busId}`,
        })
    }catch(err) {
        res.status(400).json({
            error: true,
            message: err
        })
    }
}

exports.addBus = async (req, res) => {
    try {
        if(req.auth.user.role !== "admin") {
            return res.status(401).json({
                error: true,
                message: "Permisison Denied!"
            })
        }
        const {
            vehicleRegistration,
            apiKey,
            routeName,
            startPoint,
            viaPassPoints,
            endPoint,
            routeLatLng
        } = req.body

        const busGPS = await getGpsData(apiKey)
        const newbus = new Bus({
            vehicleRegistration: vehicleRegistration,
            apiKey: apiKey,
            routeName: routeName,
            lastGpsInformation: JSON.stringify(busGPS.data.data[0]),
            startPoint: startPoint,
            endPoint: endPoint,
            routeLatLng: routeLatLng,
            viaPassPoints: viaPassPoints
        })

        const bus = await newbus.save()

        res.json({
            success: true,
            dbRes: bus
        })

    }catch(err) {
        res.status(400).json({
            error: true,
            message: err
        })
    }
}

exports.getBusById = async (req, res) => {
    try {
        let flag = true 
        if(req.auth.user.role !== "admin") 
            flag = false
        
        const { busId } = req.params
        const bus = await Bus.findOne({ _id: busId })

        res.json({
            success: true,
            dbRes: bus
        })

    }catch(err) {
        console.log(err)
        res.status(400).json({
            error: true,
            message: err
        })
    }
}

exports.getLocation = async (busId) => {
    try {
        const bus = await Bus.findOne({ _id: busId })
        const currentLocation = await getGpsData(bus.apiKey)
        let data = currentLocation.data.data[0]
        const updateBus = await Bus.findOneAndUpdate({ 
                _id: busId
            }, { 
                lastGpsInformation: JSON.stringify(data)
            }, { 
                new: true 
            }).select('-apiKey')
        return updateBus
     

    }catch(err) {
        return err
    }
}


exports.getLocationMany = async () => {
    try {
        let currentLocations = []
        const buses = await Bus.find()
        for(let i = 0; i < buses.length; i++) {
            let data = await getGpsData(buses[i].apiKey)
            const updateBus = await Bus.findOneAndUpdate({ 
                _id: buses[i]._id
            }, { 
                lastGpsInformation: JSON.stringify(data.data.data[0])
            }, { 
                new: true 
            }).select('-apiKey')
            currentLocations.push(JSON.stringify(updateBus))

        }
        return currentLocations
    }catch(err) {
        return err
    }
}

exports.getBuses = async (req, res) => {
    try {

        const bus = await Bus.find().sort({ routeName: 1 }).select('-apiKey')

        res.json({
            success: true,
            dbRes: bus
        })

    }catch(err) {
        res.status(400).json({
            error: true,
            message: err
        })
    }
}