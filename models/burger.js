// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burgers = {
  selectAll: function(cb) {
    orm.selectAll(function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(name, cb) {
    orm.insertOne(name, function(res) {
      cb(res);
    });
  },
  updateOne: function(id, cb) {
    orm.updateOne(id, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burgers;