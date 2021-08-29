const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/url-shortener', { useNewUrlParser: true, useUnifiedTopology: true})
const URL = require('./models/url')
const generateRandomCode = require('./tools/generateRandomCode')
const routes = require('./routes')

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
})


app.engine('hbs', exphbs({ defaultLayout: 'main' , extname: 'hbs'}))
app.set('view engine', 'hbs')
app.use(express.urlencoded({ extended: true }))
app.use(routes)



app.listen(port, () => {
  return console.log(`App is running on http://localhost:${port}`)
})