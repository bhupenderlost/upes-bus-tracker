const fs = require('fs')
const csvtojson = require('csvtojson')
const User = require('../models/user')

exports.studentCsvUpload = async (req, res) => {

    try {
        const { csvFileBase64 } = req.body

        const filePath = './temp/data.csv'

        const buffer = Buffer.from(csvFileBase64, 'base64')

        const tempFile =  fs.writeFileSync(filePath, buffer)

        const students = await csvtojson().fromFile('../temp/data.csv')
        
        const bulk = await User.insertMany(students)
        bulk.sa
        console.log(students)
        
    }catch(err) {
        console.log(err)
        res.status(400).json({
            error: true,
            message: err
        })
    }
}

exports.getStudents = async (req, res) => {

    try {
        if(req.auth.user.role !== "admin") {
            return res.status(401).json({
                error: true,
                message: "Permisison Denied!"
            })
        }
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
        if(req.auth.user.role !== "admin") {
            return res.status(401).json({
                error: true,
                message: "Permisison Denied!"
            })
        }
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