const Tops = require('../models/Tops')
const Closet = require('../models/Closet')


const topsController = {
    index: (req, res) => {
        Closet.findById(req.params.closetId).populate('tops')
            .then((closets) => {
                res.render('tops/index', {
                    closets: closets
                })
            })
    },

    show: (req, res) => {
        Tops.findById(req.params.topsId).then((tops) => {
            res.render('tops/show', {
                tops: tops
            })
        })
    },

    edit: (req, res) => {
        const userId = req.params.usersId
        const closetId = req.params.closetId
        Tops.findById(req.params.topsId).then(tops => {
            res.render('tops/edit', { 
                tops: tops,
                userId: userId,
                closetId: closetId
            })
        })
    },

    update: (req, res) => {
        Tops.findByIdAndUpdate(req.params.topsId, req.body).then((updatedTop) => {
            console.log(updatedTop)
            updatedTop.save()
            res.redirect(`/users/${req.params.usersId}/closet/${req.params.closetId}/tops/${req.params.topsId}`)
        })
    }

    // create: (req, res) => {
    //     // req.body is just a JS object with data from the form
    //     Tops.create(req.body).then((newTop) => {
    //       res.redirect(`/${newTop._id}`)
    //     })
    //   }

}


module.exports = topsController


