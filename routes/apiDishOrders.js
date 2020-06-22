const express = require('express')
const router = express.Router()
const DishOrder = require('../controllers/dishOrders_controller.js')

router.get('/:id/nextDish', DishOrder.nextDish)
router.get('/durationBeforeOrdering', DishOrder.durationBeforeOrdering)
router.get('/:id/durationAfterOrdering', DishOrder.durationAfterOrdering)
router.get('/allDishOrder', DishOrder.allDishOrder)

module.exports = router