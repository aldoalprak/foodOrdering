const models = require("../models")

class Dish {

    static showAll(req, res) {
        models.Dish.findAll({
            order: [
                ["id", "ASC"]
            ]
        })
            .then(dataDishes => {
                res.render("dishes_showAll", { dataDishes })
            })
    }

    static addScreen(req, res) {
        res.render('dishes_add')
    }

    static add(req, res) {

        let dataDish = {
            description: req.body.description,
            image: req.body.image,
            price: req.body.price,
            duration: req.body.duration
        }
        models.Dish.create(dataDish)
            .then(() => {
                res.redirect('/dishes')
            })
    }

    static editScreen(req, res) {
        models.Dish.findById(req.params.id)
            .then(dataDish => {
                res.render('dishes_edit', { dataDish })
            })
    }

    static edit(req, res) {
        let dataDish = {
            description: req.body.description,
            image: req.body.image,
            price: req.body.price,
            duration: req.body.duration
        }
        models.Dish.update(dataDish, {
            where: {
                id: req.params.id
            }
        })
            .then(() => {
                res.redirect('/dishes')
            })
    }

    static delete(req, res) {
        console.log("masuk delete======")
        models.Dish.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(() => {
                res.redirect('/dishes')
            })
            .catch(err => {
                console.log(err)
            })
    }

    static getDishesApi(req, res) {
        models.Dish.findAll()
            .then(dataDishes => {
                res.status(200).json({ message: "List of dishes", dataDishes })
            })
            .catch(err => {
                res.status(500).json({ message: err })
            })
    }
}

module.exports = Dish