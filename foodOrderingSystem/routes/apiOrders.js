const express = require('express')
const router = express.Router()
const Order = require('../controllers/orders_controller.js')

router.post("/:id/submitorder", Order.submitOrderApi)

module.exports = router