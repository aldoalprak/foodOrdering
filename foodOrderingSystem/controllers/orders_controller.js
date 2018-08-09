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
}

module.exports = Order