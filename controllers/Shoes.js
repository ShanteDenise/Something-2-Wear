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
    },

    show: (req, res) => {
        const shoesId = req.params.shoesId
        const userId = req.params.usersId
        const closetId = req.params.closetId
        Shoes.findById(shoesId).then((shoes) => {
            res.render('shoes/show', {
                shoes: shoes,
                closetId: closetId,
                userId: userId
            })
        })
    },
    edit: (req, res) => {
        const userId = req.params.usersId
        const closetId = req.params.closetId
        Shoes.findById(req.params.shoesId).then(shoes => {
            res.render('shoes/edit', { 
                shoes: shoes,
                userId: userId,
                closetId: closetId
            })
        })
    },
    update: (req, res) => {
        Shoes.findByIdAndUpdate(req.params.shoesId, req.body).then((updatedShoes) => {
            updatedShoes.save()
            res.redirect(`/users/${req.params.usersId}/closet/${req.params.closetId}/shoes/${req.params.shoesId}`)
        })
    }

}


module.exports = shoesController