"use strict";
//* This is an example file, put this in your seeds/ directory and use knex to run it with the command `knex seed:run --env test` */

"use strict";
let seeder = require('knex-csv-seeder').seeder;
console.log("seeder", seeder);
exports.seed = seeder.seed({
    table: 'prices',
    file: '/Users/dave/Galvanize/homework/q2/frugi/models/prices_seeds_2016-12-24_v2.csv'
});
