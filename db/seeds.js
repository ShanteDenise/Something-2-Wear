const mongoose = require('./connections')
const Tops = require('../models/Tops')
const Bottoms = require('../models/Bottoms')
const Shoes = require('../models/Shoes')
const Accessories = require('../models/Accesories')
const Closet = require('../models/Closet')
const User = require('../models/User')


const modernShirt = new Tops ({
        type: "blouse",
        color: "white",
        img: 'https://gloimg.zafcdn.com/zaful/pdm-product-pic/Clothing/2017/07/18/goods-first-img/1510286471176618651.jpg'
})

const winterSweater = new Tops ({
    type: "sweater",
    color: "red/stripe",
    img: "https://gloimg.zafcdn.com/zaful/pdm-product-pic/Clothing/2017/08/07/goods-first-img/1510287544963574635.jpg"
})
const fashionTshirt = new Tops ({
    type: "graphic tee",
    color: "grey",
    img: "https://fashionfabboutique.com/wp-content/uploads/2016/02/Fashionista.png"
})

const closet1 = new Closet ({
        tops: [modernShirt, winterSweater, fashionTshirt]

})

const User = new User ({
    name: 'Shante',
    password:'favor42',
    email:'shante.austin@yahoo.com',
    closet: [closet1]
})

        
  




    









    