require('dotenv').config()

const http = require('http')
const express = require('express')
const mongoose = require('mongoose')
const { expressjwt } = require('express-jwt')
const cors = require('cors')
const { Server } = require('socket.io')
const path = require('path')
const fs = require('fs')

const authRoutes = require('./routes/auth')
const busRoutes = require('./routes/bus')
const studentRoutes = require('./routes/student')


const { checkAuthorization } = require('./controllers/auth')
const { getLocation } = require('./controllers/bus')

const PORT = process.env.PORT || 8000
const DATABASE = process.env.DATABASE || ""

const PUBLICKEY = fs
    .readFileSync(
        path.join(
            __dirname,
            'keys',
            'public.pem'
        ),
        'utf-8'
    )


const app = express()

const server = http.createServer(app)
const io = new Server(server,  {
    cors: {
        origin: ["http://localhost:4000", "http://localhost:3000", "http://192.168.1.5:3000"]
    }
})

mongoose
    .connect(DATABASE, {

    })
    .then(db => console.log("Database Connected!"))
    .catch(err => console.log(`Error Occured: ${JSON.stringify(err)}`))

app.use(cors({
    origin: ['http://localhost:4000', 'http://localhost:3000', 'http://192.168.1.5:3000'], 
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'x-client-key', 'x-client-token', 'x-client-secret', 'Authorization'],
    credentials: true,
}))
    

app.use(express.json())


//SignIn/SignUp Routes
app.use('/auth', authRoutes)

//Middleware For JWT
app.use(
    expressjwt({
        secret: PUBLICKEY,
        userProperty: "auth",
        algorithms: ['RS256']
    })
)

//Middleware Custom Response
app.use(async (err, req, res, next ) => {
    if (err.name === "UnauthorizedError") 
        return res.status(401).json({
            error: true,
            message: `${err.inner.name}: ${err.inner.message}`
        })
    else 
        next(err)
})

//Middleware For Authorization Checking ( VAID USER OR NOT )
app.use(async (req, res, next) => {
    let user = await checkAuthorization(req)
    if(user)
        next()
    else
        return res.status(401).json({
            error: true,
            message: "Unauthorized!"
        })
})

/*
    All The Authenticated Routes 
*/
app.use('/bus', busRoutes)
app.use('/student', studentRoutes)



//Socket Calls
io.on("connection", (socket) => {
    socket.on("bus", (busId) => {
        socket.join(`${busId}`)
        socket.emit("joined", JSON.stringify({ connected: true }))
    })
    socket.on("location", (busId) => {
        getLocation(busId)
            .then((data) => {
                io.to(busId).emit("locationsent", JSON.stringify(data))
            })
            .catch(err => io.to(busId).emit("locationsent", JSON.stringify({ error: true })))
    })
})

//APP ASSIGN PORT
server
    .listen(PORT, () => {
        console.log(`Server Running At PORT: ${PORT}`)
    })