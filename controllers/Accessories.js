const Accessories = require('../models/Accessories')
const Closet = require('../models/Closet')


const accessoriesController = {
    index: (req, res) => {
        Closet.findById(req.params.closetId).populate('accessories')
            .then((closets) => {
                res.render('accessories/index', {
                    closets: closets
                })
            })
    }



}


module.exports = accessoriesController