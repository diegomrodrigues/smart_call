const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI, {
  auth: {
    username: process.env.MONGODB_USER,
    password: process.env.MONGODB_PASSWORD
  },
  dbName: "smart_call"
})

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log('Connected to mongodb!')
})

module.exports = db