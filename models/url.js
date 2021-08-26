const mongoose = require('mongoose')
const Schema = mongoose.Schema
const urlSchema = new Schema({
  fullURL: {
    type: String,
    require: true,
  },
  shortURL: {
    type: String,
    
  },
})

module.exports('URL', urlSchema)