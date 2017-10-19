'use strict';

const db = require('./server/db');
const Student = require('./server/api/student.model');
const Campus = require('./server/api/campus.model');
const Promise = require('bluebird');


let newCampuses = [
    Campus.build({ name: 'Crystal Prep', imageUrl: 'https://vignette3.wikia.nocookie.net/mlp/images/d/d4/Crystal_Empire_surrounded_by_King_Sombra_S3E2.png/revision/latest?cb=20121113070027' }),
    Campus.build({ name: 'Canterlot High', imageUrl: 'https://img00.deviantart.net/8181/i/2015/273/4/8/canterlot_by_nedemai-d5jvyvc.png' }),
    Campus.build({ name: 'Sweet Apple Academy', imageUrl: 'https://vignette.wikia.nocookie.net/mlp/images/0/04/Twilight_and_Spike_walking_into_Sweet_Apple_Acres_S1E01.png/revision/latest?cb=20120904165626' }),
    Campus.build({ name: 'Camp Everfree', imageUrl: 'http://vignette3.wikia.nocookie.net/equestriagirls/images/0/05/Legend_of_Everfree_background_asset_-_Camp_Everfree_square.png/revision/latest?cb=20160709081503' })
];
let newStudents = [
    Student.build({ name: 'Twilight Sparkle', campus_id: 1, imageUrl: 'https://mylittlepony.hasbro.com/images/pick_MLP_twilightsparkle.png'}),
    Student.build({ name: 'Fluttershy', campus_id: 2, imageUrl: 'https://mylittlepony.hasbro.com/images/pick_MLP_fluttershy.png'}),
    Student.build({ name: 'Applejack', campus_id: 3, imageUrl: 'https://mylittlepony.hasbro.com/images/pick_MLP_applejack.png' }),
    Student.build({ name: 'Rainbow Dash', campus_id: 2, imageUrl: 'https://mylittlepony.hasbro.com/images/pick_MLP_rainbowdash.png' }),
    Student.build({ name: 'Pinkie Pie', campus_id: 4, imageUrl: 'https://mylittlepony.hasbro.com/images/pick_MLP_pinkiepie.png' }),
    Student.build({ name: 'Rarity', campus_id: 2, imageUrl: 'https://mylittlepony.hasbro.com/images/pick_MLP_rarity.png'}),
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