const mongoose = require('../db/connections')
const Schema = mongoose.Schema


const Shoes = new Schema({
    type: String,
    color: String,
    img: String
})


module.exports = mongoose.model('Shoes', Shoes)