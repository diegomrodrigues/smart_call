const mongoose = require("mongoose")
const { Schema } = mongoose

const userSchema = new Schema({
    name: String,
    age: Number,
    email: String,
    phone: String
})

const productSchema = new Schema({
    name: String,
    description: String,
    categories: [String],
    price: Number,
    stock: Number,
    brand: String,
    specifications: Schema.Types.Mixed,
    images: [String]
})

const ctaSchema = new Schema({
    product: String,
    cta: String
})

const cartSchema = new Schema({
    user: userSchema,
    products: [productSchema],
    ctas: [ctaSchema]
})

const Cart = mongoose.model("Cart", cartSchema)

module.exports = Cart
