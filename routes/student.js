const express = require('express')
const {
    getStudents,
    getStudentById
} = require('../controllers/student')

const router = express.Router()

router.get('/students', getStudents)

router.get('/student/:userId', getStudentById)



module.exports = router