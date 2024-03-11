const express = require('express')
const { addBus, getBuses, getBusById, updateBus, deleteBus } = require('../controllers/bus')


const router = express.Router()

router.post('/add', addBus)

router.put('/update/:busId', updateBus)

router.delete('/delete', deleteBus)

router.get('/bus', getBuses)
router.get('/bus/:busId', getBusById)


module.exports = router