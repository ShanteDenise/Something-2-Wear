//Connection to a database

const mongoose =require('mongoose')

mongoose.connect('mongodb://localhost/something-2-wear')

mongoose.connection.once('open', () => {
    console.log('Mongoose has connected to MongoDB')
})

module.exports = mongoose