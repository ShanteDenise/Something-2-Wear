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
    },
    show: (req, res) => {
        const bottomsId = req.params.bottomsId
        const userId = req.params.usersId
        const closetId = req.params.closetId
        Bottoms.findById(bottomsId).then((bottoms) => {
            res.render('bottoms/show', {
                bottoms: bottoms,
                closetId: closetId,
                userId: userId,
                bottomsId: bottomsId
            })
        })
    }



}


module.exports = bottomsController