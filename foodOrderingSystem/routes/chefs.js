const express = require('express')
const router = express.Router()
const Chef = require('../controllers/chefs_controller.js')

router.get('/', Chef.allChef)
router.get('/add', Chef.addScreen)
router.post('/add', Chef.add)
router.get('/:id/delete', Chef.delete)

module.exports = router