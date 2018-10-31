const Closet = require('../models/Closet')
const Shoes = require('../models/Shoes')


const shoesController = {
    index: (req, res) => {
        Closet.findById(req.params.closetId).populate('shoes')
            .then((closets) => {
                res.render('shoes/index', {
                    closets: closets
                })
            })
    }



}


module.exports = shoesController