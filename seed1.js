"use strict";
let seeder = require('knex-csv-seeder');
 
exports.seed = seeder({
  table: 'users',
  file: 'models/user_products_seeds.csv',
  // recordsPerQuery: 100, 
  // encoding: 'utf8' default encoding 
  // parser: { 
  //   delimiter: ',', 
  //   quote: '"', 
  //   escape: '\\' 
  // } 
});
