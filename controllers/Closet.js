const Closet = require('../models/Closet')

const closetController = {
    new: (req, res) => {
        res.render('closet/new')
    },
    create: (req,res) => {
        console.log("this is the id: ",req.params.userId)
        User.findById(req.params.id).then(user =>{
            Closet.create(req.body).then(() => {
                res.redirect('/users',{
                    user: user
                })
            })
        })
    }
}


module.exports = closetController
