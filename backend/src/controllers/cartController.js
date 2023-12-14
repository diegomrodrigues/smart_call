const Cart = require('../models/Cart')
const call = require('../call')

const cartController = {
    async create(req, res) {
        try {
            const newCart = new Cart(req.body.cart)

            await newCart.save()

            //const callToAction = await call.createCallToAction(newCart)
            //res.status(201).json(callToAction)
            res.status(201).json(newCart)
        } catch (error) {
            console.error(error)
            res.status(500).send("Error")
        }
    }

}

module.exports = cartController