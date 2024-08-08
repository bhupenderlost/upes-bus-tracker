const { Schema, model, default: mongoose } = require("mongoose");

//init busSchema
const busSchema = Schema({
    //Vehicle Registration Number ( RTO )
    vehicleRegistration: {
        type: String, //Type Of String
        required: true, //It is required
        unique: true //Should be unique
    },
    //API Key For The Tracking The Bus
    apiKey: {
        type: String, //Type Of String
        required: true, //Required 
        unique: true //Should be unique 
    },
    //Route Name Of The Bus
    routeName: {
        type: String, //Type Of String
        required: true //It is required
    },
    //Start Point Of The Bus
    startPoint: {
        type: String //Type Of String
    },
    //End Point Of The Bus
    endPoint: {
        type: String //Type Of String
    },
    //Routes Latitude and Longitude Of The Bus
    routeLatLng: [],
    //From Where The Bus Would Go
    viaPassPoints: String,
    //The Latest GPS Information Of The Bus 
    lastGpsInformation: {
        type: String //Type Of String But Stores The Stringified Version Of JSON Data
    },
    //Contact Number Of The Driver ( If Any )
    driverContact: Number
    
}, { timestamps: true }) //Timestamps should be shown createdAt and updatedAt

//Create The Model Named BUS
const Bus = model('Bus', busSchema)
//Export the model BUS
module.exports = Bus