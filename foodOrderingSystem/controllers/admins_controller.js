const models = require('../models')
const bcrypt = require('bcrypt')

class Admin {

    static allAdmin(req, res) {
        models.Admin.findAll()
            .then(dataAdmins => {
                res.render("admins_showAll", { dataAdmins })
            })
    }

    static addScreen(req, res) {
        res.render('admins_add')
    }

    static add(req, res) {
        let hash = bcrypt.hashSync(req.body.password, 10)
        models.Admin.create({
            email: req.body.email,
            password: hash
        })
            .then(() => {
                res.redirect("/admins")
            })
    }

    static delete(req, res) {
        models.Admin.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(() => {
                res.redirect("/admins")
            })
    }

    static signInScreen(req, res) {
        res.render("admins_signIn")
    }

    static signIn(req, res) {
        // let token = jwt.sign({ email: req.body.email })

        models.Admin.findOne({
            where: {
                email: req.body.email
            }
        })
            .then((dataUser) => {
                if (dataUser !== null) {
                    let checkPass = bcrypt.compareSync(req.body.password, dataUser.password)
                    if (checkPass) {
                        res.redirect("/dishes")
                    } else {
                        res.send("wrong password/username")
                    }
                } else {
                    res.send("user not found")
                }
            })

    }
}

module.exports = Admin