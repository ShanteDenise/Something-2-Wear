const usersController = {
    new: (req, res) => {
        res.render("users/show")  
},
    show: (req, res) => {
    res.send('damn')  
},
    create: (req, res) => {
    res.send("grrrrr")  
}

}
   

module.exports = usersController

