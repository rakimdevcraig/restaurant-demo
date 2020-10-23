//https://bezkoder.com/node-js-upload-multiple-files/ 
//might help with multer

//This is our database model we can use methods on this like find
//create, remove
const Menu = require('../models/Menu')
const Cart = require('../models/Cart')

//desc get all items from the menu
//route Get '/menu'
exports.getMenu = async (req, res, next) => {
    try {
        const menu = await Menu.find()

        return res.status(200).json({
            success: true,
            count: menu.length,
            data: menu
        })

        // return res.json(menu)
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        })
    }
}

//desc get all items from the cart
//route Get '/cart'
exports.getCart = async (req, res, next) => {
    try {
        const cart = await Cart.find()

        return res.status(200).json({
            success: true,
            count: cart.length,
            data: cart
        })

        // return res.json(menu)
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        })
    }
}

//desc add items to the cart
//route post  '/cart'
exports.addToCart = async (req, res, next) => {
    try {
        const { name, type, description, price, picture, id, extraInstructions } = req.body
        const cart = await Cart.create(req.body)

        return res.status(201).json({
            success: true,
            data: cart
        })
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        })
    }
}
// {
//     "cartItems":{
//             "name": "test",
//             "description": "test",
//             "picture": "test",
//             "price": "test",
//             "type": "test",
//             "extraInstructions": "test"
//         }
// }
//desc add items to the menu
//route post  '/menu'
exports.addMenuItems = async (req, res, next) => {
    try {
        const { name, type, description, price, picture } = req.body
        const menu = await Menu.create(req.body)

        return res.status(201).json({
            success: true,
            data: menu
        })
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        })
    }
}
// {
//     "name":"test",
//     "price":"$1.99",
//     "description":"dffddffdfd",
//     "picture":"dxdfff",
//     "type":"taco"
// }



//desc delete item from the menu
//route Get '/menu/:id'
exports.deleteMenuItems = (req, res, next) => {
    res.send('item deleted')
}