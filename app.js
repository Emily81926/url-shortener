const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('this will be url-shortener app!')
})


app.listen(port, () => {
  return console.log(`App is running on http://localhost:${port}`)
})