const Cart = require('../models/Cart')
const call = require('../call')

const cartController = {
    async create(req, res, next) {
        try {
            const newCart = new Cart(req.body.cart)

            await newCart.save()

            const callToAction = await call.createCallToAction(newCart)
        
            console.log(callToAction)

            res.status(201).json(callToAction)    
        } catch (error) {
            next(error)
        }
    }

}

module.exports = cartController