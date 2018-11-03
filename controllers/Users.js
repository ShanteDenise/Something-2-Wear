const User = require('../models/User')
const Closet = require('../models/Closet')



const usersController = {
index: (req, res) => {
    const closetId = req.params.closetId
    const usersId = req.params.usersId
    User.find({}).populate('users')
    .then( (user) => {
        let closet = user.closet
        res.render('users/index', {
            user: user,
            usersId: usersId,
            closetId: closet
        })
    })
},

login: (req, res) => {
        res.send("login/login")  
},

new: (req, res) => {
    res.render('users/new')
},


show: (req, res) => {
    const userId = req.params.usersId
    const closetId = req.params.closetId
    User.findById(req.params.usersId).populate('closet')
    .then((user) => {
        res.render('users/show', {
            user: user,
            closetId: closetId,
            userId: userId
        })
    }) 
  },


  create: (req, res) => {
      User.create(req.body).then(() => {
          res.redirect('/users')
      })
},


delete: (req, res) => {
    User.findByIdAndRemove(req.params.usersId).then(() => {
      res.redirect('/users')
    })
  }

  


    
}



   

module.exports = usersController

