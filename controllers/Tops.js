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
        const topsId = req.params.topsId
        const userId = req.params.usersId
        const closetId = req.params.closetId
        Tops.findById(req.params.topsId).then((tops) => {
            res.render('tops/show', {
                tops: tops,
                closetId: closetId,
                userId: userId,
                topsId: topsId
                // topsId: topsId
            })
        })
    },

    new: (req, res) => {
        res.render('tops/new')
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
            updatedTop.save()
            res.redirect(`/users/${req.params.usersId}/closet/${req.params.closetId}/tops/${req.params.topsId}`)
        })
    },

    create: (req, res) => {
        Tops.create(req.body).then((newTop) => {
            newTop.save()
          res.redirect(`/users/${req.params.usersId}/closet/${req.params.closetId}/tops`)
        })
      }

}


module.exports = topsController


