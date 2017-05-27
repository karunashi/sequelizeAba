// Our Burger controller
// =====================

// This file uses Sequelize to manage data manipulation
// for all apropos http requests.

// NOTE: This is the same file from last week's homework,
// but with each route gutted and replaced with sequelize queries
// where references to our outmoded ORM file once sat.

var express = require('express');
var router = express.Router();
// edit burger model to match sequelize
var Burger = require('../models/')["Burger"];

//get route -> index
router.get('/', function(req,res) {
	// send us to the next get function instead.
	res.redirect('/burgers')
});

// get route, edited to match sequelize
router.get('/burgers', function(req,res) {
	// replace old function with sequelize function
	Burger.findAll()
	// use promise method to pass the burgers...
	.then(function(burger_data){
		// into the main index, updating the page
		return res.render('index', {burger_data})
	})
});

// post route to create burgers
router.post('/burgers/create', function(req, res) {
	// edited burger create to add in a burger_name
	Burger.create({name: req.body.name})
	// pass the result of our call
	.then(function(newBurger){
		// redirect
		res.redirect('/');
	});
});

// put route to devour a burger
router.put('/burgers/update', function(req, res){
  Burger.Burger.update(
    {
      consumed: true
    },
    {where: {id: req.body.burger_id}
    }).then(function(newBurger) {
      res.redirect('/');
    });
})

module.exports = router;
