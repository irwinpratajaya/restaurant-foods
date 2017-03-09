var express = require('express');
var bodyParser = require('body-parser');

var foods = require('./routes/foods');
var restaurants = require('./routes/restaurants');

var mongoose = require('mongoose') // harus di inisialisasi manual
mongoose.connect('mongodb://localhost/restaurant-foods') // harus di inisialisasi manual
mongoose.Promise = global.Promise;

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/foods', foods);
app.use('/restaurants', restaurants);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = app;
