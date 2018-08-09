const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const dishes = require('./routes/dishes.js')
const apiDishes = require('./routes/apiDishes.js')
const apiCustomers = require('./routes/apiCustomers.js')
const apiOrders = require('./routes/apiOrders.js')

app.use(bodyParser.urlencoded({ extended: false }))

app.set('view engine', 'ejs')

app.use('/dishes', dishes)
app.use('/api/dishes', apiDishes)
app.use('/api/customers', apiCustomers)
app.use('/api/orders', apiOrders)

app.listen(3000, function () {
	console.log("listen")
})