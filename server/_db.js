'use strict';

var Sequelize = require('sequelize');

var databaseURI = 'postgres://localhost:5432/ponycollege';

var db = new Sequelize(databaseURI, {
  define: {
    timestamps: false,
    underscored: true
  },
  logging: false
});

module.exports = db;
