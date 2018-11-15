const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const User = new Schema ({
    name: String,
    email:String,
    img: String,
    password: {
        type:String,
        maxlength:10,
    },
    closet: {
        type: Schema.Types.ObjectId,
        ref: 'Closet'
    }
})

module.exports = mongoose.model('User', User)

