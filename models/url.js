const mongoose = require('mongoose')
const Schema = mongoose.Schema
const urlSchema = new Schema({
  inputURL: {
    type: String,
    required: true,
  },
  randomCode: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('URL', urlSchema)