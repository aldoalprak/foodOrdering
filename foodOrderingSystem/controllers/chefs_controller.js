const models = require('../models')
const bcrypt = require('bcrypt')

class Chef {

    static allChef(req, res) {
        models.Chef.findAll()
            .then(dataChefs => {
                res.render("chefs_showAll", { dataChefs })
            })
    }

    static addScreen(req, res) {
        res.render('chefs_add')
    }

    static add(req, res) {
        let hash = bcrypt.hashSync(req.body.password, 10)
        models.Chef.create({
            email: req.body.email,
            password: hash
        })
            .then(() => {
                res.redirect("/chefs")
            })
    }

    static delete(req, res) {
        models.Chef.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(() => {
                res.redirect("/chefs")
            })
    }

}

module.exports = Chef