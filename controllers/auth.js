const User = require('../models/user')
const jwt = require('jsonwebtoken')
const fs = require('fs')
const path = require('path')
const crypto = require('crypto')

//Encryptes Passwords 
const encryptPassword = (password, salt) => { //Takse 2 arguments 1. password ( palin text ) 2. salt (any random words/buffer )
    //returns the encrytped password encrypted using sha256
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
        //Destructure the email, password from body
        const { 
            email, 
            password 
        } = req.body
        //finds the users in the db using email
        let user = await User.findOne({ email })
        //if no user exists give error
        if(!user) {
            return res.status(400).json({
                error: error,
                message: 'User/Password Incorrect!'
            });
        }
        //check for the password
        if(encryptPassword(password, user.salt) !== user.encpy_password) { // calls the encyptPassword(password, user.salt)  
            //if password is incorrect give error
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
        let time = new Date() //get current time
        time.setTime(time.getTime() + 1800 * 1000) //change the time to unix
        user.salt = undefined //undefine the salt
        user.encpy_password = undefined //undfine the encpy_password
        //generate cookie with name gps and value as jwtToken
        res.cookie("gps", jwtToken, {
            expire: time, //expire time
            path: "/", //path of the cookie
            domain: "localhost", //domain of the site
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

//Change Password Function
exports.changePassword = async (req, res) => {

    try {
        //Destructure oldPassword, newPassword From req.body
        const { 
            oldPassword,
            newPassword
        } = req.body
        //Find For The User
        let user = await User.findOne({ _id: req.auth._id })
        //If No User Found
        if(!user) {
            //Give Error
            return res.status(400).json({
                error: error,
                message: 'User Incorrect!'
            })
        }
        //If Old Password is not correct
        if(encryptPassword(oldPassword, user.salt) !== user.encpy_password) {
            //Return the error 
            return res.status(401).json({
                error: true,
                message: 'Old Password Incorrect!'
            })
        }
        //Create A New Salt
        let salt = crypto.randomUUID()
        //Create A New Encrpted Password
        let newencpassword = encryptPassword(newPassword, salt)
        //Update The New Password And Salt
        let updatePassword = await User.updateOne(
                { 
                    _id: req.auth._id //Filter
                },
                {
                    encpy_password: newencpassword,  //Update
                    salt: salt 
                }
            )
        //Success Response 
        res.json({
            success: true,
            message: "Password Changed!",
            dbRes: updatePassword
        })

    }catch(err) {
        //On Error 
        res.status(400).json({
            error: true,
            message: err
        })
    }
}
//User Signup 
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

//User Logout
exports.loggout = async (req, res) => {
    try {
        //Clear The Cookie 
        res.clearCookie('gps', { path: '/', domain: 'localhost', expires: new Date(1) })
        //Give Success Status 
        res.status(200).json({
            logout: true,
            redirect: true
        })
    }catch(err) {
        //If Error Give Error Response 
        res.status(400).json({
            error: true,
            message: err
        })
    }
   
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
