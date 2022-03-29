const mongoose = require('mongoose');

const dishSchema = new mongoose.Schema({
    resturantID: {type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant'},
    orderID: {type: mongoose.Schema.Types.ObjectId, ref: 'Order'},
    dishName: String,
    description: String,
    image: String,
    price: Number
})

const Dish = mongoose.model('Dish', dishSchema)

module.exports = Dish