'use strict';

const db = require('./_db');

const Campus = require('./api/campus.model');
const Student = require('./api/student.model');
const Message = require('./api/message');
const Channel = require('./api/channel');
const Author = require('./api/author');


Student.belongsTo(Campus, {onDelete: 'CASCADE'});
Campus.hasMany(Student);

Channel.hasMany(Message, {
    onDelete: 'cascade',
    hooks: true
  });
  
  Author.hasMany(Message);
  
  Message.belongsTo(Channel);
  Message.belongsTo(Author);

//Student.belongsToMany(Campus, {through: 'StudentId'});
// Campus.belongsToMany(Student, {through: 'StudentId'});

// Student.create({name: "Twilight Sparkle"});


module.exports = db;
