const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Outfit = new Schema({
    name: String
})


module.exports = mongoose.model('Outfit', Outfit)