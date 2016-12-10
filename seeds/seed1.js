"use strict";
let seeder = require('knex-csv-seeder').seeder;
console.log("seeder", seeder);
exports.seed = seeder.seed({
    table: 'prices',
    file: '/Users/dave/Galvanize/homework/q2/frugi/models/user_products_seeds.csv'
});
