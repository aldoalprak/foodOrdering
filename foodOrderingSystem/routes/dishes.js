const express = require('express')
const router = express.Router()
const Dish = require('../controllers/dishes_controller.js')

router.get('/', Dish.showAll)
router.get('/add', Dish.addScreen)
router.post('/add', Dish.add)
router.get('/edit/:id', Dish.editScreen)
router.post('/edit/:id', Dish.edit)
router.get('/delete/:id', Dish.delete)

module.exports = router