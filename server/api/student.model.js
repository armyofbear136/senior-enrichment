'use strict';

const Sequelize = require('sequelize');

const db = require('../_db');

const Student = db.define('student', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://i.pinimg.com/736x/cb/eb/39/cbeb39e2d7e695be25ef45cd96312f0f--my-little-pony-scootaloo-baby-pony.jpg'
  }
});

module.exports = Student;
