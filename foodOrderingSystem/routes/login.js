const express = require('express')
const router = express.Router()
const Admin = require('../controllers/admins_controller.js')

router.get('/', Admin.signInScreen)
router.post('/', Admin.signIn)

module.exports = router