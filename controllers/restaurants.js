var restaurant = require('../models/restaurant')

var restaurants = {}

restaurants.getRestaurants = function(req,res,next) {
  restaurant.find().then(function(datarestaurant) {
    res.send(datarestaurant)
  })
}

restaurants.getOneRestaurant = function (req,res,next) {
  restaurant.find({_id: req.params.id}).then(function(err,data) {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
}

restaurants.addRestaurants = function(req,res,next){
  restaurant.create({
    name: req.body.name,
    owner: req.body.owner,
    address: req.body.address,
    open_status: req.body.open_status
  }).then(function(err, data) {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
}

restaurants.removeRestaurants = function (req,res,next) {
  restaurant.find({_id: req.params.id}).remove(function(err,data) {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
}

restaurants.updateRestaurants = function (req,res,next) {
  restaurant.update({
    _id: req.params.id
  }, {
    $set: req.body
  }).then(function(err, data) {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
}




module.exports = restaurants
