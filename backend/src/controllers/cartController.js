const Cart = require('../models/Cart')
const call = require('../call')

const cartController = {
    async create(req, res) {
        try {
            const newCart = new Cart(req.body)

            await newCart.save()

            const callToAction = await call.createCallToAction(newCart)

            res.status(201).json(callToAction)
        } catch (error) {
            console.error(error)
            res.status(500).send("Error")
        }
    }

}

module.exports = cartController