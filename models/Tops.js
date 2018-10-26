const mongoose = require('../db/connections')
const Schema = mongoose.Schema


const Tops = new Schema({
    type: String,
    color: String,
    img: String
})


module.exports = mongoose.model('Tops', Tops)
