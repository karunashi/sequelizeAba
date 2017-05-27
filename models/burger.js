'use strict';


module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define('Burger', {
    name: {
     type: DataTypes.STRING, 
     allowNull: false
    },
    consumed: {
    	type: DataTypes.BOOLEAN,
    	defaultValue: false // only line we needed to add.
    }
  });
  return Burger;
};