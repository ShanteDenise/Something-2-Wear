const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const User = new Schema ({
    name: String,
    password: String,
    closet: Array,
    outfits: Array

})

module.exports = mongoose.model('User', User)

