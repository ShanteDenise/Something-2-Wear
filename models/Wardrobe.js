const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Wardrobe = new Schema ({
    tops: [
        {
            type:Schema.Types.ObjectId,
            ref: 'Outfit'
        }
    ],
    bottoms: [
        {
            type:Schema.Types.ObjectId,
            ref: 'Outfit'
        }
    ],

    shoes: [
        {
            type:Schema.Types.ObjectId,
            ref: 'Outfit'
        }
    ],

    accessories: [
        {
            type:Schema.Types.ObjectId,
            ref: 'Outfit'
        }
    ]
   

})


module.exports = mongoose.model('Outfit', Outfit)