const applicationController = {
    index: (req, res) => {
    res.render('app/index')
},

    show: (req, res) => {
    res.send("Hey girl Hey")  
}
}
   

module.exports = applicationController





