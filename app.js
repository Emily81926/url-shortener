const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const exphbs = require('express-handlebars')
require('./config/mongoose')
const routes = require('./routes')


app.engine('hbs', exphbs({ defaultLayout: 'main' , extname: 'hbs'}))
app.set('view engine', 'hbs')
app.use(express.urlencoded({ extended: true }))
app.use(routes)



app.listen(PORT, () => {
  return console.log(`App is running on http://localhost:${PORT}`)
})