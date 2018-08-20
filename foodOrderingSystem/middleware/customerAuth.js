const jwt = require('jsonwebtoken')
const models = require('../models')

function isCustomer(req, res, next) {
    let decoded = jwt.verify(req.headers.token, "helloworld123")
    console.log("=====>", decoded.email)
    models.Customer.findOne({
        where: {
            email: decoded.email
        }
    })
        .then(dataCustomer => {
            // console.log("======", dataCustomer)
            if (dataCustomer) {
                return next()
            } else {
                res.status(500).json({ message: "you can't access this page" })
            }
        })
        .catch(err => {
            console.log(err)
        })
}

module.exports = isCustomer 