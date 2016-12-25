"use strict";
let seeder = require('knex-csv-seeder');
console.log(seeder);
let seed = seeder.seeder.seed({
  table: 'prices',
  file: '../models/prices_seeds_2016-12-24.csv',
});
seed();
console.log(seed)
