const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let foodSchema = Schema({
  name: String,
  price: Number,
  expired_date: Date
})

var food = mongoose.model('food', foodSchema );

module.exports = food
