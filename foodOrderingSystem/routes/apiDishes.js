const express = require('express')
const router = express.Router()
const Dish = require('../controllers/dishes_controller.js')

router.get('/', Dish.getDishesApi)

module.exports = router