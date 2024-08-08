require('dotenv').config() //Import dotenv 

/*
    IMPORT Packages
    1. http
    2. express
    3. mongoose
    4. express-jwt
    5. cors
    6. socket.io
    7. path
    8. fs

*/
const http = require('http')
const express = require('express')
const mongoose = require('mongoose')
const { expressjwt } = require('express-jwt')
const cors = require('cors')
const { Server } = require('socket.io')
const path = require('path')
const fs = require('fs')

/*  
    IMPORTS Routes

    1. Auth Routes
    2. Bus Routes
    3. Student Routes
*/
const authRoutes = require('./routes/auth')
const busRoutes = require('./routes/bus')
const studentRoutes = require('./routes/student')


// Import checkAuthorization() from controllers/auth.js
const { checkAuthorization } = require('./controllers/auth')
// Import getLocation(), getLocationMany() from controllers/bus.js
const { getLocation, getLocationMany } = require('./controllers/bus')

//INIT PORT
const PORT = process.env.PORT || 8000
//INIT DATABASE
const DATABASE = process.env.DATABASE || ""

//Import Public Key
const PUBLICKEY = fs
    .readFileSync(
        path.join(
            __dirname,
            'keys',
            'public.pem'
        ),
        'utf-8'
    )

//INIT APP
const app = express()

//Create Server
const server = http.createServer(app)
//INIT Scoket.IO Server
const io = new Server(server,  {
    cors: {
        origin:  process.env.ORIGIN.split(",") //CORS String FROM .ENV 
    }
})
//Database Connection
mongoose
    .connect(DATABASE, {

    })
    .then(db => console.log("Database Connected!")) //Connected
    .catch(err => console.log(`Error Occured: ${JSON.stringify(err)}`)) //Throws Error
//Use The CORS 
app.use(cors({
    origin: process.env.ORIGIN.split(","), //Split The ORIGIN String into array
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'], // Methods Allowed
    allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'x-client-key', 'x-client-token', 'x-client-secret', 'Authorization'], //Headers Allowed
    credentials: true, //Are Credentials Required
}))
    
//Use The JSON Parser
app.use(express.json())

// app.get('/', (req, res) => {
//     res.redirect('/app')
// })

// app.use('/admin*', express.static(
//     path.join(
//         __dirname, 
//         'public', 
//         'admin'
//     )
// ))

// app.use('/app*', express.static(
//     path.join(
//         __dirname, 
//         'public', 
//         'app'
//     )
// ))

//SignIn/SignUp Routes
app.use('/api/v1/auth', authRoutes)

//Middleware For JWT
app.use(
    expressjwt({
        secret: PUBLICKEY, //Public Key 
        userProperty: "auth", //Property Of Decrypted JWT Token
        algorithms: ['RS256'] //Algorithm For JWT Token ( RS256 Currently )
    })
)

//Middleware Custom Response
app.use(async (err, req, res, next ) => {
    //If Error Name === 'UnauthorizedError'
    if (err.name === "UnauthorizedError") 
        //Return the 401 Error (Custom Error)
        return res.status(401).json({
            error: true,
            message: `${err.inner.name}: ${err.inner.message}`
        })
    else 
        next(err) //If No Error Take Call The Next Function
})

//Middleware For Authorization Checking ( VAID USER OR NOT )
app.use(async (req, res, next) => {
    //Check if user exists
    let user = await checkAuthorization(req)
    if(user)
        next() //Exits So Call The Next Function
    else
        return res.status(401).json({ //Else Call The Error Function
            error: true,
            message: "Unauthorized!"
        })
})

/*
    All The Authenticated Routes 
*/
app.use('/api/v1/bus', busRoutes) //Bus Routes ( Default Starts With /bus )
app.use('/api/v1/student', studentRoutes) //Student Routes ( Default Starts With /student )



//Socket Calls
io.on("connection", (socket) => { //If Connections Establishes

    //When Bus Gets Emitted From Client
    socket.on("bus", (busId) => {
        //Join the client to the room with the name ${busId}
        socket.join(`${busId}`)
        //After Joined Emit The joined 
        socket.emit("joined", JSON.stringify({ connected: true })) //Gives The Connected: TRUE 
    })

    //When location Gets Emitted From Client
    socket.on("location", (busId) => { //Takes The busId argument which comes from the client
        //Calls The getLocation(busId)  
        getLocation(busId)
            .then((data) => { //Gets the data
                io.to(busId).emit("locationsent", JSON.stringify(data)) //emits the data to the roomId
            })
            .catch(err => io.to(busId).emit("locationsent", JSON.stringify({ error: true }))) //If Catches any error emits the error
    })

    //When all gets emitted from the client
    socket.on("all", (userId) => {
        socket.join("buses") //Joins the buses room
        socket.emit("joined", JSON.stringify({ connected: true })) //gives out the connected 
    })
    //When all-location gets emitted from the client
    socket.on("all-location", () => {
        //Calls the getLocationMany() 
        getLocationMany()
            .then(data => {
                io.to("buses").emit("location-all", data)
            }) //gets all the data of all the buses
            .catch(err =>{
                io.to("buses").emit("location-all", JSON.stringify({ error: true }))
            }) //sends error in case of any
    })
})

//APP ASSIGN PORT
server
    .listen(PORT, () => {
        console.log(`Server Running At PORT: ${PORT}`)
    })