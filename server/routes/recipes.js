var express = require('express');
var router = express.Router();
const { v4: uuid } = require('uuid');

// Injecting mock data
let recipes = [
	{
		title: "Pizza",
		ingredients: "dough, salami, cheese",
		instructions: "Knead the dough, add the salami and cheese, bake in oven",
		uniqueId: uuid()
	},
	{
		title: "Pasta",
		ingredients: "dough, tomatoes, cheese",
		instructions: "Knead the dough, add the tomatoes and cheese, boil the pasta, pour sauce",
		uniqueId: uuid()
	}
];

router.get('/', function(req, res, next) {
  res.send(recipes);
});

router.post('/', function (req, res, next) {
  console.log(req.body)
  if (Object.keys(req.body).length === 0) {
    return res.status(400).send({ message: 'Recipe must have a body of data!' })
  }
  const recipe = 
  { 
    title: req.body.title, 
    ingredients: req.body.ingredients, 
    instructions: req.body.instructions, 
    uniqueId: uuid() 
  };
  
  recipes.push(recipe);
  return res.send(recipe);
});

router.delete('/delete/:uniqueId', function (req, res, next) {
  const length = recipes.length;
  recipes = recipes.filter(x => x.uniqueId !== req.params.uniqueId);
  
  if (length === recipes.length) return res.status(404).send({ message: 'Recipe not found' })

  return res.send(recipes);
});

router.get('/instructions/:uniqueId', function (req, res, next) {
  const foundRecipe = recipes.find(x => x.uniqueId === req.params.uniqueId);

  if (!foundRecipe) return res.status(404).send({ message: 'Recipe not found' });

  return res.send(foundRecipe.instructions);
})

router.delete('/all', function (req, res, next) {
  recipes = [];
  return res.send(recipes);
})

module.exports = router;
