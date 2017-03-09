var food = require('../models/food')

var foods = {}

foods.getFoods = function(req,res,next) {
  food.find().then(function(datafood) {
    res.send(datafood)
  })
}

foods.getOneFood = function (req,res,next) {
  food.find({_id: req.params.id}).then(function(err,data) {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
}

foods.addFoods = function(req,res,next){
  food.create({
    name: req.body.name,
    price: req.body.price,
    expired_date: req.body.expired_date
  }).then(function(err, data) {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
}

foods.removeFoods = function (req,res,next) {
  food.find({_id: req.params.id}).remove(function(err,data) {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
}

foods.updateFoods = function (req,res,next) {
  food.update({
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




module.exports = foods
