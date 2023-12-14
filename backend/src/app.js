require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })

const express = require('express')
const bodyParser = require('body-parser')

const db = require('./config/db')

const cartsRoutes = require('./routes/carts')

const app = express()
const port = 3000

app.use(bodyParser.json())

app.use(cartsRoutes)

app.get('/', (req, res) => {
  res.send(`Hello World!`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})