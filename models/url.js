const mongoose = require('mongoose')
const Schema = mongoose.Schema
const urlSchema = new Schema({
  inputURL: {
    type: String,
    require: true,
  },
  randomCode: {
    type: String,
    require: true,
  },
})

module.exports = mongoose.model('URL', urlSchema)