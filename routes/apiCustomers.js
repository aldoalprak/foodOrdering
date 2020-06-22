const express = require('express')
const router = express.Router()
const Customer = require('../controllers/customers_controller.js')

router.post('/signup', Customer.signUp)
router.post('/signin', Customer.signIn)

module.exports = router