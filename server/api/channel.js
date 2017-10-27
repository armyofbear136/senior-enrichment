const Sequelize = require('sequelize');
const db = require('../_db');

module.exports = db.define('channel', {
  name: Sequelize.STRING
});
