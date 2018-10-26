const mongoose = require('../db/connections')
const Schema = mongoose.Schema


const Bottoms = new Schema({
    type: String,
    color: String,
    img: String
})


module.exports = mongoose.model('Bottoms', Bottoms)