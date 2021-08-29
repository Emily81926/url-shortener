const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
require('./config/mongoose')

const URL = require('./models/url')
const generateRandomCode = require('./tools/generateRandomCode')
const routes = require('./routes')


app.engine('hbs', exphbs({ defaultLayout: 'main' , extname: 'hbs'}))
app.set('view engine', 'hbs')
app.use(express.urlencoded({ extended: true }))
app.use(routes)



app.listen(port, () => {
  return console.log(`App is running on http://localhost:${port}`)
})