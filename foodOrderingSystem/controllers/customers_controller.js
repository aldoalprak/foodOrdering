const models = require('../models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

class Customer {
    static signUp(req, res) {
        let hash = bcrypt.hashSync(req.body.password, 10)
        let dataUser = {
            username: req.body.username,
            email: req.body.email,
            password: hash
        }

        models.Customer.create(dataUser)
            .then((dataUser) => {
                res.status(200).json({ message: "user successfully sign up", dataUser })
            })
            .catch(err => {
                res.status(500).json({ message: err.message })
            })
    }

    static signIn(req, res) {
        // let token = jwt.sign({ email: req.body.email })

        models.Customer.findOne({
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

module.exports = Customer