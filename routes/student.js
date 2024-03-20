const express = require('express')
const {
    getStudents,
    getStudentById,
    studentCsvUpload
} = require('../controllers/student')
const { checkAdmin } = require('../middlewares/admin')

const router = express.Router()

router.get('/students', getStudents)

router.get('/student/:userId', getStudentById)

router.post('/add', checkAdmin, studentCsvUpload)



module.exports = router