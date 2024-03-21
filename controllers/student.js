const fs = require('fs')
const csvtojson = require('csvtojson')
const User = require('../models/user')
const crypto = require('crypto')

const encryptPassword = (password, salt) => {
    return crypto
            .createHmac('sha256', salt)
            .update(password)
            .digest('hex')
}

exports.studentCsvUpload = async (req, res) => {

    try {

        if(req.auth.user.role !== "admin")
            return res.status(401).json({
                error: true,
                message: "Permisison Denied!"
            })

        const { csvFileBase64 } = req.body

        const filePath = './temp/data.csv'

        const buffer = Buffer.from(csvFileBase64, 'base64')

        const tempFile =  fs.writeFileSync(filePath, buffer)

        if(buffer) {

            const csvData = await csvtojson().fromFile(filePath)

            let students = []

            csvData.map((data) => {

                const salt = crypto.randomUUID()

                const password = encryptPassword(data.sapId, salt)

                const schema = {
                    firstName: data.firstName,
                    lastName: data.lastName,
                    username: data.firstName + '_' + data.sapId,
                    email: data.email,
                    courseName: data.courseName,
                    semester: parseInt(data.semester),
                    sapId: parseInt(data.sapId),
                    boardingPoint: data.boardingPoint,
                    encpy_password: password,
                    salt: salt
                }
                students.push(schema)
            })

            const insertStudents = await User.insertMany(students)

            res.json({
                success: true,
                message: "All Students Inserted!",
                dbRes: insertStudents
            })

        }
               
    }catch(err) {
        res.status(400).json({
            error: true,
            message: err
        })
    }
}

exports.getStudents = async (req, res) => {

    try {
        if(req.auth.user.role !== "admin") 
            return res.status(401).json({
                error: true,
                message: "Permisison Denied!"
            })
        
        const pageOptions = {
            page: req.query.page || 1,
            limit: req.query.limit || 10,
            select: 'firstName lastName username email sapId courseName semester boardingPoint',
        }
        //Find User
        let user = await User
            .paginate({}, pageOptions)
        res.json({
            success: true,
            dbRes: user
        })
    }catch(err) {
        res.status(400).json({
            error: true,
            message: err
        })
    }
}
exports.getStudentById = async (req, res) => {
    try {
        if(req.auth.user.role !== "admin") 
            return res.status(401).json({
                error: true,
                message: "Permisison Denied!"
            })
        
        const { userId } = req.params
        //Find User
        let user = await User
            .findOne({ _id: userId })
        res.json({
            success: true,
            dbRes: user
        })
    }catch(err) {
        res.status(400).json({
            error: true,
            message: err
        })
    }
}