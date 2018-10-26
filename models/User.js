const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const User = new Schema ({
    name: String,
    password: {
        type:String,
        maxlength:10,
    },
    closet: [
        {
        type: Schema.Types.ObjectId,
        ref:'Tops'
    },
    {
        type: Schema.Types.ObjectId,
        ref: 'Bottoms'
    },
    {
        type: Schema.Types.ObjectId,
        ref: 'Shoes'
        
    },
    {
        type: Schema.Types.ObjectId,
        ref: 'Accessories'
        
    }
]

})

module.exports = mongoose.model('User', User)

