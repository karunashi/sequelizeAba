// Import MySQL connection.

var connection = require("./connection.js");

// Object for all our SQL statement functions.
var orm = {
  selectAll: function(cb) {
    connection.query("SELECT * FROM burgers", function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function(name, cb) {
    connection.query('INSERT INTO burgers SET ?', {
      name: name,
      consumed: false
    }, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  // An example of objColVals would be {name: panther, sleepy: true}
  updateOne: function(id, cb) {
    connection.query("UPDATE burgers SET ? WHERE ?", [{consumed: true}, {id: id}], function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

// Export the orm object for the model.
module.exports = orm;
