const models = require('../models')
const jwt = require('jsonwebtoken')

class DishOrder {
    static nextDish(req, res) {
        models.DishOrder.update({ Completed: true }, //update finish cooking
            {
                where: {
                    id: req.params.id
                }
            })
            .then(() => {
                models.DishOrder.findAll({ //find all orders which 'Completed' column equal false
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
                        res.status(200).json({ message: "current Dish to cook", dataOrder: dataOrder[0] })
                    })
            })
    }

    static allDishOrder(req, res) {
        models.DishOrder.findAll({
            include: [{
                model: models.Dish
            }],
            order: [
                ["id", "ASC"]
            ],
        })
            .then(dataOrder => {
                res.status(200).json({ message: "list dishOrder", dataOrder })
            })
    }

    static durationBeforeOrdering(req, res) {
        models.DishOrder.findAll({ //find all orders which 'Completed' column equal false
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
                // res.json(dataOrder)
                let totalDuration = 0
                for (let i = 0; i < dataOrder.length; i++) {
                    totalDuration += dataOrder[i].Dish.duration //accumulate all duration
                }
                res.status(200).json({ message: "waiting time before ordering", totalDuration })
            })
    }

    static durationAfterOrdering(req, res) {
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
                let totalDuration = 0
                for (let i = 0; i < dataOrder.length; i++) {
                    if (dataOrder[i].OrderId <= req.params.id) {
                        totalDuration += dataOrder[i].Dish.duration //accumulate duration time but stop when OrderId <= req.params.id
                    }
                }
                res.status(200).json({ message: "waiting time after ordering", totalDuration })
            })
    }
}

module.exports = DishOrder