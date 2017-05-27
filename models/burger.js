'use strict';


module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define('Burger', {
    name: {
     type: DataTypes.STRING, 
     allowNull: false
    },
    consumed: {
    	type: DataTypes.BOOLEAN,
    	defaultValue: false // This is required for Sequelize to work correctly (as suggested in gitlab)
    }
  });
  return Burger;
};