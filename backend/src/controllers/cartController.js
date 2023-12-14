const Cart = require('../models/Cart')
const cta = require('../cta')

const cartController = {
    async create(req, res, next) {
        try {
            const newCart = new Cart(req.body.cart)

            const result = await cta.createCallToAction(newCart)

            newCart.ctas = result.ctas
            newCart.save()

            res.status(201).json(result)
        } catch (error) {
            next(error)
        }
    }

}

module.exports = cartController