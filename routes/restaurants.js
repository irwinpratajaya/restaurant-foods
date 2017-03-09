var express = require('express');
var router = express.Router();
var restaurants = require('../controllers/restaurants')


router.get('/', restaurants.getRestaurants)

router.get('/:id', restaurants.getOneRestaurant)

router.post('/', restaurants.addRestaurants)

router.delete('/:id', restaurants.removeRestaurants)

router.put('/:id', restaurants.updateRestaurants)

module.exports = router;
