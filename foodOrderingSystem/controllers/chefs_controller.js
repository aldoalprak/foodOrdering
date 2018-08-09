const models = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

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

    static signIn(req, res) {
        models.Chef.findOne({
            where: {
                email: req.body.email
            }
        })
            .then((dataUser) => {
                if (dataUser !== null) {
                    let checkPass = bcrypt.compareSync(req.body.password, dataUser.password)
                    let token = jwt.sign({ id: dataUser.id }, 'helloworld123')
                    if (checkPass) {
                        res.status(200).json({ message: "user sign in successfully", token })
                    } else {
                        res.status(300).json({ message: "wrong password/username" })
                    }
                } else {
                    res.status(500).json({ message: 'user not found, please sign up' })
                }
            })

    }

}

module.exports = Chef