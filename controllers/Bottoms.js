const Bottoms = require('../models/Bottoms')
const Closet = require('../models/Closet')


const bottomsController = {
    index: (req, res) => {
        Closet.findById(req.params.closetId).populate('bottoms')
            .then((closets) => {
                res.render('bottoms/index', {
                    closets: closets
                })
            })
    }



}


module.exports = bottomsController