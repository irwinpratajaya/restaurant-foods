var express = require('express');
var router = express.Router();
var food = require('../controllers/food')


router.get('/', foods.getFoods)

router.post('/', foods.addFoods)

router.delete('/:id', foods.removeFoods)

router.put('/:id', foods.updateFoods)

module.exports = router;
