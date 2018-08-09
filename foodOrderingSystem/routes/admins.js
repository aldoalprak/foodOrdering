const express = require('express')
const router = express.Router()
const Admin = require('../controllers/admins_controller.js')

router.get('/', Admin.allAdmin)
router.get('/add', Admin.addScreen)
router.post('/add', Admin.add)
router.get('/:id/delete', Admin.delete)

module.exports = router