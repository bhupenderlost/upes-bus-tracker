const express = require('express')
const { signIn, signup, loggout } = require('../controllers/auth')


const router = express.Router()

router.post('/signin', signIn)
router.post('/signup', signup)
router.post('/logout', loggout)

module.exports = router