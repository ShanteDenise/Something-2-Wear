

const loginController = {
    index: (req, res) => {
    res.render('login/index', {login: login})
}
}
   

module.exports = loginController
