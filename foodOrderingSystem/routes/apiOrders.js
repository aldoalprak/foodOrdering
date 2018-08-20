const express = require('express')
const router = express.Router()
const Order = require('../controllers/orders_controller.js')
const customerAuth = require('../middleware/customerAuth.js')

router.post('/:id/submitorder', customerAuth, Order.submitOrderApi)
router.get('/allOrder', customerAuth, Order.allOrder)
router.get('/:id/totalPrice', customerAuth, Order.totalPrice)

module.exports = router