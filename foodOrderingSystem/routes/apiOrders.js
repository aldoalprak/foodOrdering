const express = require('express')
const router = express.Router()
const Order = require('../controllers/orders_controller.js')

router.post('/:id/submitorder', Order.submitOrderApi)
router.get('/allOrder', Order.allOrder)
router.get('/totalPrice', Order.totalPrice)

module.exports = router