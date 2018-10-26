const mongoose = require('./connections')
const Tops = require('../models/Tops')
const Bottoms = require('../models/Bottoms')
const Shoes = require('../models/Shoes')
const Accessories = require('../models//Accessories')
const Closet = require('../models/Closet')
const User = require('../models/User')


const modernShirt = new Tops ({
        type: "blouse",
        color: "white",
        img: 'https://gloimg.zafcdn.com/zaful/pdm-product-pic/Clothing/2017/07/18/goods-first-img/1510286471176618651.jpg'
});

const winterSweater = new Tops ({
    type: "sweater",
    color: "red/stripe",
    img: "https://gloimg.zafcdn.com/zaful/pdm-product-pic/Clothing/2017/08/07/goods-first-img/1510287544963574635.jpg"
});

const fashionTshirt = new Tops ({
    type: "graphic tee",
    color: "grey",
    img: "https://fashionfabboutique.com/wp-content/uploads/2016/02/Fashionista.png"
});

const classicSkinny = new Bottoms ({
    type: "skinny legged jeans",
    color: "dark blue",
    img: "https://mbtskoudsalg.com/images/black-skinny-jeans-png-1.png"
});

const leatherSkirt = new Bottoms ({
   type: "leather mini skirt",
   color: "black",
   img:"http://www.toogoodtobebasic.com/files/images/produkter/Fritlagte_produktbilleder_561x650/leather-skirt_miracle_molly_black.png"

});

const miniShorts = new Bottoms ({
    type: "mini shorts",
    color: "light blue shorts",
    img:"https://http2.mlstatic.com/shorts-jeans-importado-pronta-entrega-leia-as-medidas-D_NQ_NP_696298-MLB26712892776_012018-F.jpg"
 
 }); 

 const camoPants = new Bottoms ({
    type: "camo pants",
    color: "green camo pants",
    img:"https://www.harrysarmysurplus.net/assets/images/rothco/2586_2.jpg"
 
 }); 

 const openHeel = new Shoes ({
     type: "open toe LV shoes",
     color: "black",
     img: "http://purepng.com/public/uploads/large/purepng.com-christian-louboutin-black-drapesse-peep-toelower-wearshoelouboutindrapesseblack-142152638039518vge.png"
 })

 const ankleBoots = new Shoes ({
    type: "Block heel ankle boot",
    color: "black stripe",
    img: "https://cdn-img.prettylittlething.com/3/1/9/a/319a4dff31f4201f18935c3261b1093841dc7ce3_cly5888_1.jpg?imwidth=1024"
})

const closedHeel = new Shoes ({
    type: "closed toe shoe",
    color: "black",
    img: "http://purepng.com/public/uploads/large/purepng.com-christian-louboutin-black-drapesse-peep-toelower-wearshoelouboutindrapesseblack-142152638039518vge.png"
})

const redBoots = new Shoes ({
    type: "red booties",
    color: "red",
    img: "https://melbournechapter.net/images/transparent-booties-clear-plastic-5.png"
})

const coinPurse = new Accessories ({
    type: "coin purse",
    color: "black",
    img: "https://banner2.kisspng.com/20180206/jae/kisspng-chanel-moschino-handbag-fashion-chanel-black-chanel-bag-lingge-5a7a368ed85cd6.8167302115179587988862.jpg"
})
const necklace = new Accessories ({
    type: "layed necklace",
    color: "gold",
    img:"http://pngimg.com/uploads/necklace/necklace_PNG130.png"
})

const closet1 = new Closet ({
        Tops: [modernShirt, winterSweater, fashionTshirt],
        Bottoms: [classicSkinny, leatherSkirt, miniShorts, camoPants],
        Shoes:[openHeel, ankleBoots, closedHeel, redBoots],
        Accessories:[coinPurse, necklace]


});

const user1 = new User ({
    name: 'Shante Austin',
    password:'favor42',
    email:'shante.austin@yahoo.com',
    closet: [closet1]
});

        
  
User.remove({})
.then(() => {
    Closet.insertMany([closet1])
})
.then(() => Tops.insertMany([modernShirt, winterSweater, fashionTshirt]))
.then(() => Bottoms.insertMany([classicSkinny, leatherSkirt, miniShorts, camoPants]))
.then(() => Shoes.insertMany([openHeel, ankleBoots, closedHeel, redBoots]))
.then(() => Accessories.insertMany([coinPurse, necklace]))
.then(() => user1.save())
.then(() => console.log("Database seeded success"))
.then(() => mongoose.connection.close())












    