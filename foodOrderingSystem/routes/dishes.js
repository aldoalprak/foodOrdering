const express = require('express')
const router = express.Router()
const Dish = require('../controllers/dishes_controller.js')

router.get('/', Dish.showAll)
router.get('/add', Dish.addScreen)
router.post('/add', Dish.add)
router.get('/:id/edit', Dish.editScreen)
router.post('/:id/edit', Dish.edit)
router.get('/:id/delete', Dish.delete)

module.exports = router