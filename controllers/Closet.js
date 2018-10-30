const Closet = require('../models/Closet')

const closetController = {
    new: (req, res) => {
        res.render('closet/new')
    },
    create: (req,res) => {
      Closet.create(req.body).then(() => {
            res.redirect('/users')
    })
}
}


module.exports = closetController
