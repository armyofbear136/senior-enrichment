'use strict';

const Sequelize = require('sequelize');

const db = require('../_db');

const Campus = db.define('campus', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true
        }
    },
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/My_Little_Pony_G4_logo.svg/1200px-My_Little_Pony_G4_logo.svg.png'
    }
});

module.exports = Campus;
