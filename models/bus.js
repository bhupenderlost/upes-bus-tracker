const { Schema, model, default: mongoose } = require("mongoose");

const busSchema = Schema({
   
    vehicleRegistration: {
        type: String,
        required: true,
        unique: true
    },
    apiKey: {
        type: String,
        required: true,
        unique: true
    },
    routeName: {
        type: String,
        required: true
    },
    startPoint: {
        type: String
    },
    endPoint: {
        type: String
    },
    viaPassPoints: String,
    lastGpsInformation: {
        type: String
    },
    driverContact: Number
    
}, { timestamps: true })


const Bus = model('Bus', busSchema)

module.exports = Bus