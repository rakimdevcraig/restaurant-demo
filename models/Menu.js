const mongoose = require('mongoose')

const MenuSchema = new mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: String
    },
    picture: {
        type: String
    },
    type: {
        type: String
    }
})

module.exports = mongoose.model('MenuItem', MenuSchema)
// The first argument is the singular name of the collection
// your model is for. Mongoose automatically looks for the plural, lowercased version of your model name. 
// Thus, for the example above, the model MenuItem is for the MenuItems collection in the database.


