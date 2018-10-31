const mongoose = require('./connections')
const Tops = require('../models/Tops')
const Bottoms = require('../models/Bottoms')
const Shoes = require('../models/Shoes')
const Accessories = require('../models//Accessories')
const Closet = require('../models/Closet')
const User = require('../models/User')

const modernShirt = new Tops ({
        type: "Blouse",
        color: "White",
        img: 'https://gloimg.zafcdn.com/zaful/pdm-product-pic/Clothing/2017/07/18/goods-first-img/1510286471176618651.jpg'
});

const winterSweater = new Tops ({
    type: "Sweater",
    color: "Red/stripe",
    img: "https://gloimg.zafcdn.com/zaful/pdm-product-pic/Clothing/2017/08/07/goods-first-img/1510287544963574635.jpg"
});

const fashionTshirt = new Tops ({
    type: "Graphic tee",
    color: "Grey",
    img: "https://fashionfabboutique.com/wp-content/uploads/2016/02/Fashionista.png"
});

const classicSkinny = new Bottoms ({
    type: "Skinny legged jeans",
    color: "Dark blue",
    img: "https://mbtskoudsalg.com/images/black-skinny-jeans-png-1.png"
});

const leatherSkirt = new Bottoms ({
   type: "Leather mini skirt",
   color: "Black",
   img:"http://www.toogoodtobebasic.com/files/images/produkter/Fritlagte_produktbilleder_561x650/leather-skirt_miracle_molly_black.png"

});

const miniShorts = new Bottoms ({
    type: "Mini shorts",
    color: "Light blue shorts",
    img:"https://http2.mlstatic.com/shorts-jeans-importado-pronta-entrega-leia-as-medidas-D_NQ_NP_696298-MLB26712892776_012018-F.jpg"
 
 }); 

 const camoPants = new Bottoms ({
    type: "Camo Pants",
    color: "Green Camo Pants",
    img:"https://www.harrysarmysurplus.net/assets/images/rothco/2586_2.jpg"
 
 }); 

 const openHeel = new Shoes ({
     type: "Open Toe LV Shoes",
     color: "Black",
     img: "http://purepng.com/public/uploads/large/purepng.com-christian-louboutin-black-drapesse-peep-toelower-wearshoelouboutindrapesseblack-142152638039518vge.png"
 })

 const ankleBoots = new Shoes ({
    type: "Block heel ankle boot",
    color: "Black stripe",
    img: "https://cdn-img.prettylittlething.com/3/1/9/a/319a4dff31f4201f18935c3261b1093841dc7ce3_cly5888_1.jpg?imwidth=1024"
})

const closedHeel = new Shoes ({
    type: "Huaraches",
    color: "Galaxy",
    img: "https://assets.bigcartel.com/product_images/176825561/product_image.jpg?auto=format&fit=max&w=1500"
})

const redBoots = new Shoes ({
    type: "Red booties",
    color: "Red",
    img: "https://melbournechapter.net/images/transparent-booties-clear-plastic-5.png"
})

const coinPurse = new Accessories ({
    type: "Purse",
    color: "Pink",
    img: "https://sc01.alicdn.com/kf/HTB1LRcYPVXXXXbkXVXXq6xXFXXXn/230003894/HTB1LRcYPVXXXXbkXVXXq6xXFXXXn.jpg"
})
const necklace = new Accessories ({
    type: "layed necklace",
    color: "gold",
    img:"http://pngimg.com/uploads/necklace/necklace_PNG130.png"
})


const closet1 = new Closet ({
    tops: [modernShirt, winterSweater, fashionTshirt],
    bottoms: [classicSkinny, leatherSkirt, miniShorts, camoPants],
    shoes: [openHeel, ankleBoots, closedHeel, redBoots],
    accessories: [coinPurse, necklace]
});

    const user1 = new User ({
    name: 'Shante Austin',
    password:'favor42',
    img:'https://i.pinimg.com/564x/d2/1c/65/d21c651e69d5d2a8f86b1acddc381a85.jpg',
    email:'shante.austin@yahoo.com',
    closet: [closet1]
});

        
  
User.deleteMany({})
.then(() => Closet.deleteMany({}))
.then(() => Tops.deleteMany({}))
.then(() => Bottoms.deleteMany({}))
.then(() => Shoes.deleteMany({}))
.then(() => Accessories.deleteMany({}))
.then(() => Tops.insertMany([modernShirt, winterSweater, fashionTshirt]))
.then(() => Bottoms.insertMany([classicSkinny, leatherSkirt, miniShorts, camoPants]))
.then(() => Shoes.insertMany([openHeel, ankleBoots, closedHeel, redBoots]))
.then(() => Accessories.insertMany([coinPurse, necklace]))
.then(() => Closet.insertMany([closet1]))
.then(() => user1.save())
.then(() => console.log("Database seeded success"))
.then(() => mongoose.connection.close())












    