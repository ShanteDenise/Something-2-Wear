const mongoose = require('../db/connections')
const Schema = mongoose.Schema


const Accessories = new Schema({
    type: String,
    color: String,
    img: String
})


module.exports = mongoose.model('Accessories', Accessories)