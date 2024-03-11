const User = require('../models/user')
const jwt = require('jsonwebtoken')
const fs = require('fs')
const path = require('path')
const crypto = require('crypto')

const encryptPassword = (password, salt) => {
    return crypto
            .createHmac('sha256', salt)
            .update(password)
            .digest('hex')
}
//Private Key For JWT Signing
const privateKey = fs
    .readFileSync(
        path.join(
            __dirname, 
            '..',
            'keys', 
            'private.pem'
        ),
        'utf-8'
    )

//SignIn Function
exports.signIn = async (req, res) =>  {   
    //Try-Catch Block
    try {
        const { 
            email, 
            password 
        } = req.body
        let user = await User.findOne({ email })
        if(!user) {
            return res.status(400).json({
                error: error,
                message: 'User/Password Incorrect!'
            });
        }
        if(encryptPassword(password, user.salt) !== user.encpy_password) {
            return res.status(401).json({
                error: true,
                message: 'User/Password Incorrect!'
            })
        }
       //Signing JWT Token
       const jwtToken = jwt.sign(
            {
                _id: user._id, //User ID
                user: {
                    email: user.email, //Firebase UID
                    firstName: user.firstName, //User firstName
                    role: user.userType
                }
            },
            privateKey, //Private Key
            {
                algorithm: 'RS256', //Algorithm
                allowInsecureKeySizes: true, //Must Be False In Production
                expiresIn: user.userType === 'admin'? '1h' : '60d' //Expiry 
            }
        )
        let time = new Date()
        time.setTime(time.getTime() + 1800 * 1000)
        user.salt = undefined
        user.encpy_password = undefined
        res.cookie("gps", jwtToken, {
            expire: time,
            path: "/",
            domain: "localhost",
        })
        //Success
        res.json({
            success: true,
            token: jwtToken,
            dbRes: user
        })
    }catch(err) {
        //On Error 
        res.status(400).json({
            error: true,
            message: err
        })
    }
}


exports.signup = async (req, res) => {

     //Try-Catch Block
     try {
        const { 
           email,
           username,
           password,
           firstName
        } = req.body
        let salt = crypto.randomUUID()

        let user =  new User({
            email: email,
            username: username,
            firstName: firstName,
            encpy_password: encryptPassword(password, salt),
            salt: salt
        })
       
        let newuser = await user.save()
       //Signing JWT Token
       const jwtToken = jwt.sign(
            {
                _id: user._id, //User ID
                user: {
                    email: user.email, //Firebase UID
                    firstName: user.firstName, //User firstName
                    role: user.userType
                }
            },
            privateKey, //Private Key
            {
                algorithm: 'RS256', //Algorithm
                allowInsecureKeySizes: true, //Must Be False In Production
                expiresIn: '1d' //Expiry 
            }
        )
        let time = new Date()
        time.setTime(time.getTime() + 1800 * 1000)
        user.salt = undefined
        user.encpy_password = undefined
        res.cookie("gps", jwtToken, {
            expire: time,
            path: "/",
            domain: "localhost",
        })
        //Success
        res.json({
            success: true,
            token: jwtToken,
            dbRes: user
        })
    }catch(err) {
        //On Error 
        res.status(400).json({
            error: true,
            message: err
        })
    }
}
exports.loggout = async (req, res) => {
    try {
        res.clearCookie('gps', { path: '/', domain: 'localhost', expires: new Date(1) })
        res.status(200).json({
            logout: true,
            redirect: true
        })
    }catch(err) {
        res.status(400).json({
            error: true,
            message: err
        })
    }
   
}

//Verify Token
exports.verifyToken = async (req, res) => {
    res.json({
        success: true,
        message: "Token is valid!"
    })
}

//Check Authorization Function
exports.checkAuthorization = async (req) => {
    //Destructure req.auth
    let { 
        _id 
    } = req.auth
    //Try-Catch Block
    try {
        //Find User
        let user = await User
            .findOne({ _id: _id })
        //Exists
        if(user)
            return true //TRUE
    
        //Does'nt Exist
        return false //FALSE
    }catch(err) {
        //On Error 
        return false //FALSE
    }
   
}
