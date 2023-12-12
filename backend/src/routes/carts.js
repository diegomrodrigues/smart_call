const express = require('express')

const cartController = require('../controllers/cartController')

const router = express.Router()

router.post('/v1/carts', cartController.create)

module.exports = router