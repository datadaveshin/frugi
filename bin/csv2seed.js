"use strict";
let seeder = require('knex-csv-seeder');
console.log(seeder);
let seed = seeder.seeder.seed({
  table: 'users_products',
  file: '../models/user_products_seeds.csv',
});
seed();
console.log(seed)
