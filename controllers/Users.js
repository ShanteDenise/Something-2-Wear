const User = require('../models/User')
const Closet = require('../models/Closet')


const usersController = {
index: (req, res) => {
    User.find({}).populate('users')
    .then( (user) => {
        res.render('users/index', {
            user: user
        })
    })
},

login: (req, res) => {
        res.send("login/login")  
},

new: (req, res) => {
    res.send('users/new')
},


show: (req, res) => {
    const userId = req.params.usersId
    const closetId = req.params.closetId
    console.log(userId)
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
      User.create(req.body).then(newUser => {
          res.redirect('/users')
      })
}

  


    
}



   

module.exports = usersController

