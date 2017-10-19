'use strict';

const db = require('./_db');

const Campus = require('./api/campus.model');
const Student = require('./api/student.model');


Student.belongsTo(Campus, {onDelete: 'CASCADE'});
Campus.hasMany(Student);

//Student.belongsToMany(Campus, {through: 'StudentId'});
// Campus.belongsToMany(Student, {through: 'StudentId'});

// Student.create({name: "Twilight Sparkle"});


module.exports = db;
