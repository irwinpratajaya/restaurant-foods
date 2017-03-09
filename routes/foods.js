var express = require('express');
var router = express.Router();
var foods = require('../controllers/foods')


router.get('/', foods.getFoods)

router.get('/:id', foods.getOneFood)

router.post('/', foods.addFoods)

router.delete('/:id', foods.removeFoods)

router.put('/:id', foods.updateFoods)

module.exports = router;
