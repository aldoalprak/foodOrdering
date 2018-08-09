const models = require('../models')
const jwt = require('jsonwebtoken')

class Order {

    static submitOrderApi(req, res) {
        let decoded = jwt.verify(req.headers.token, "helloworld123")

        models.Order.findOne({
            where: {
                id: req.params.id
            }
        })
            .then(dataOrder => {
                if (dataOrder) {
                    models.DishOrder.create({
                        DishId: req.body.DishId,
                        OrderId: req.params.id,
                        portions: req.body.portions
                    })
                        .then(() => {
                            res.status(200).json({ message: "order successfully submitted" })
                        })
                        .catch(err => {
                            res.status(500).json({ message: err.message })
                        })
                } else {
                    models.Order.create({
                        CustomerId: decoded.id
                    })
                        .then(dataOrder => {
                            models.DishOrder.create({
                                DishId: req.body.DishId,
                                OrderId: req.params.id,
                                portions: req.body.portions
                            })
                                .then(() => {
                                    res.status(200).json({ message: "order successfully submitted" })
                                })
                                .catch(err => {
                                    res.status(500).json({ message: err.message })
                                })
                        })
                }
            })
    }

    static allOrder(req, res) {
        models.Order.findAll({
            include: models.Dish
        })
            .then(dataOrder => {
                res.status(200).json({ dataOrder })
            })
    }

    static nextDish(req, res) {
        models.DishOrder.update({ Completed: true },
            {
                where: {
                    id: req.params.id
                }
            })
            .then(() => {
                models.DishOrder.findAll({
                    include: [{
                        model: models.Dish
                    }],
                    order: [
                        ["id", "ASC"]
                    ],
                    where: {
                        Completed: false
                    }
                })
                    .then(dataOrder => {
                        res.status(200).json({ message: "order list", dataOrder: dataOrder[0] })
                    })
            })
    }

    static totalPriceAndDuration(req, res) {
        let decoded = jwt.verify(req.headers.token, "helloworld123")
        models.Order.findAll({
            where: {
                CustomerId: decoded.id
            },
            include: models.Dish
        })
            .then(dataOrder => {
                // res.json({ dataOrder })
                let dishes = dataOrder[0].Dishes
                let totalPrice = 0
                let duration = 0
                for (let i = 0; i < dishes.length; i++) {
                    totalPrice += dishes[i].price * dishes[i].DishOrder.portions
                    duration += dishes[i].duration
                }

                res.status(200).json({ message: "total price and duration", totalPrice, duration })
            })
    }
}

module.exports = Order