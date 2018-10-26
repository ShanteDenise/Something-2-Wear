const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Closet = new Schema ({
    tops: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Tops'
        },
    ],
    bottoms: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Bottoms'
        },
    ],
    shoes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Shoes'
        },
    ],
    accessories: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Accessories'
        },
    ]
   



})



module.exports = mongoose.model('Closet', Closet)
