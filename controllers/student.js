const fs = require('fs')
const csvtojson = require('csvtojson')
const User = require('../models/user')
const crypto = require('crypto')

//Encryptes Passwords 
const encryptPassword = (password, salt) => { //Takse 2 arguments 1. password ( palin text ) 2. salt (any random words/buffer )
    //returns the encrytped password encrypted using sha256
    return crypto
            .createHmac('sha256', salt)
            .update(password)
            .digest('hex')
}

//Upload Students Using CSV
exports.studentCsvUpload = async (req, res) => {
    //Try-Catch Block
    try {
        /*
            Check For The Admin Role Of The Current User Who 
            Is Sending The Request To Add The Students To The Database 
        */
        if(req.auth.user.role !== "admin")
            //If Does'nt Return Error
            return res.status(401).json({
                error: true,
                message: "Permisison Denied!"
            })

        //Destructure The req.body
        const { 
            csvFileBase64 
        } = req.body
        //Default File Path To Be Created Usign The csvFileBase64
        const filePath = './temp/data.csv'
        //Create The Buffer From Base64
        const buffer = Buffer.from(csvFileBase64, 'base64')
        //Write The Buffer To The File System
        const tempFile =  fs.writeFileSync(filePath, buffer)
        //If Buffer exits 
        if(buffer) {   
            /*
                Use the csvtojson() function from module csvtojson
                Convert the csv to json data
            */ 
            const csvData = await csvtojson().fromFile(filePath)
            //Init the students array
            let students = []
            //Map the csvData which is in the 
            csvData.map((data) => {
                //Create the salt for each student
                const salt = crypto.randomUUID()
                //Create the encrypted password for each student
                const password = encryptPassword(data.sapId, salt)
                //Create the schema
                const schema = {
                    firstName: data.firstName, //First Name
                    lastName: data.lastName, //Last Name
                    username: data.firstName + '_' + data.sapId, //Username = First Name + '_' + SAPID ( Eg - firstname_50010 )
                    email: data.email, //Email
                    courseName: data.courseName, //Course Name
                    semester: parseInt(data.semester), //Semester 
                    sapId: parseInt(data.sapId), //SAPID
                    boardingPoint: data.boardingPoint, //Boarding Point
                    encpy_password: password, //Password
                    salt: salt //Salt
                }
                //Push The Schema To The Students Array
                students.push(schema)
            })
            //Bulk Insert The Students Saved In The Students array
            const insertStudents = await User.insertMany(students)
            //Give Response To The User
            res.json({
                success: true,
                message: "All Students Inserted!",
                dbRes: insertStudents
            })

        }
               
    }catch(err) {
        //If Encounters Any Error Give Error
        res.status(400).json({
            error: true,
            message: err
        })
    }
}

//Get Students ( ALL )
exports.getStudents = async (req, res) => {
    //Try-Catch Block
    try {
        //If User Role Is Not Admin
        if(req.auth.user.role !== "admin") 
            //Deny Access
            return res.status(401).json({
                error: true,
                message: "Permisison Denied!"
            })
        //Pagination Options
        const pageOptions = {
            page: req.query.page || 1, //Page Number
            limit: req.query.limit || 10, //Limit The Docs
            select: 'firstName lastName username email sapId courseName semester boardingPoint', //Select Only These 
        }
        //Find User
        let user = await User
            .paginate({}, pageOptions)
        //Return Success Response 
        res.json({
            success: true,
            dbRes: user
        })
    }catch(err) {
        //If Error Give Error
        res.status(400).json({
            error: true,
            message: err
        })
    }
}

//Get Student By ID
exports.getStudentById = async (req, res) => {
    //Try-Catch Block
    try {
        //Check For Admin Role
        if(req.auth.user.role !== "admin") 
            //If Not Return Permission Denied Error
            return res.status(401).json({
                error: true,
                message: "Permisison Denied!"
            })
        
        const { userId } = req.params //Destrucuture Params From Req
        //Find User
        let user = await User
            .findOne({ _id: userId }) //Find User By ID
        //Success
        res.json({
            success: true,
            dbRes: user
        })
    }catch(err) {
        //Error 
        res.status(400).json({
            error: true,
            message: err
        })
    }
}