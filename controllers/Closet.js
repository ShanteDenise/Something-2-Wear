const Closet = require('../models/Closet')

const closetController = {
    new: (req, res) => {
        res.render('closet/new')
    },
    create: (req,res) => {
        console.log("this is the id: ",req.params.userId)
        User.findById(req.params.id).then(user =>{
            Closet.create(req.body).then((closet) => {
                res.redirect(`/users/${user.userId}`,{
                    user: user,
                    closet: closet
                })
            })
        })
    }
}


module.exports = closetController
