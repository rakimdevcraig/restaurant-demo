const mongoose = require('mongoose')


//Create schema
const MenuSchema = new mongoose.Schema({
    cartItems: [
        {
            id: { type: mongoose.Schema.Types.ObjectId },
            name: { type: String },
            description: { type: String, },
            picture: { type: String },
            price: { type: String },
            type: { type: String },
            extraInstructions: { type: String }
        }
    ]
})

module.exports = Item = mongoose.model('Cart2', MenuSchema)