// Template from previous assignment's stylization for controller.

var express = require('express');
var router = express.Router();
var Burger = require('../models/')["Burger"];

//Get Route for Index Page
router.get('/', function(req,res) {
	// send us to the next get function instead.
	res.redirect('/burgers')
});

// Get Route for getting everything
router.get('/burgers', function(req,res) {
	Burger.findAll().then(function(burger_data){
		// Update the index page with the data.
		return res.render('index', {burger_data})
	})
});

// Post method used for creating (submit button)
router.post('/burgers/create', function(req, res) {
	// Create with 'name' for field (to fit our schema)
	Burger.create({name: req.body.name}).then(function(newBurger){
		res.redirect('/');
	});
});

// Updating the id of burger (burger_id being the name of the value) with consumed = true
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
