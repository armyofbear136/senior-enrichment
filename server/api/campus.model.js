'use strict';

const Sequelize = require('sequelize');

const db = require('../_db');

const Campus = db.define('campus', {
  name: Sequelize.STRING
});

module.exports = Campus;
