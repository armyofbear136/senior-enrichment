'use strict';

const db = require('./server/db');
const Student = require('./server/api/student.model');
const Campus = require('./server/api/campus.model');
const Promise = require('bluebird');


let newCampuses = [
    Campus.build({ name: 'Crystal Prep' }),
    Campus.build({ name: 'Canterlot High' }),
    Campus.build({ name: 'Sweet Apple Academy' }),
    Campus.build({ name: 'Camp Everfree' })
];
let newStudents = [
    Student.build({ name: 'Twilight Sparkle', campus_id: 1 }),
    Student.build({ name: 'Fluttershy', campus_id: 2 }),
    Student.build({ name: 'Applejack', campus_id: 3 }),
    Student.build({ name: 'Rainbow Dash', campus_id: 2 }),
    Student.build({ name: 'Pinkie Pie', campus_id: 4 }),
    Student.build({ name: 'Rarity', campus_id: 2 }),
    Student.build({ name: 'Trixie Lulamoon', campus_id: 1 }),
    Student.build({ name: 'Moondancer', campus_id: 1 }),
    Student.build({ name: 'Princess Celestia', campus_id: 2 }),
    Student.build({ name: 'Princess Luna', campus_id: 2 }),
    Student.build({ name: 'Princess Cadence', campus_id: 1 }),
]

function createCampuses () {
    return Promise.map(newCampuses, function (campus) {
      return campus.save();
    });
  }

  function createStudents () {
    return Promise.map(newStudents, function (student) {
      return student.save();
    });
  }
  
  function seed () {
    return createCampuses()
    .then(() => {
      return createStudents();
    });
  }

db.sync({ force: true })
    .then(() => {
        console.log('Seeding database');
        return seed();
    })
    .then(() => {
        console.log('Seeding successful');
    }, function (err) {
        console.error('Error while seeding');
        console.error(err.stack);
    })
    .finally(() => {
        db.close();
        return null;
    });