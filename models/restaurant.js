const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let restaurantSchema = Schema({
  name: String,
  owner: String,
  address: String,
  open_status: Boolean
})

var restaurant = mongoose.model('restaurant', restaurantSchema );

module.exports = restaurant
