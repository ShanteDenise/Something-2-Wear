const User = require('../models/User')




const usersController = {
    login: (req, res) => {
        res.render("login/login")  
},

new: (req, res) => {
    res.render('users/new')
  },
show: (req, res) => {
    User.findById(req.params.id).populate('bottoms').then((user) => {
      res.render('users/show', {user:user})
    }) 
    }
    
}
//     create: (req, res) => {
//     res.send("grrrrr")  
// }


   

module.exports = usersController

