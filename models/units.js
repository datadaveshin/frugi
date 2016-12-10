"use strict";
let units = [{
  id: 1,
  unit: 'mg',
}, {
  id: 2,
  name: 'g',
}, {
  id: 3,
  name: 'kg',
}, {
  id: 4,
  name: 'fluid oz',
}, {
  id: 5,
  name: 'pint',
}, {
  id: 6,
  name: 'quart',
}, {
  id: 7,
  name: 'gal',
}, {
  id: 8,
  name: 'dry oz',
}, {
  id: 9,
  name: 'lb',
}, {
  id: 10,
  name: 'inch',
}, {
  id: 11,
  name: 'foot',
}, {
  id: 12,
  name: 'each',
}, {
  id: 13,
  name: '1/2 dozen',
}, {
  id: 14,
  name: 'dozen',
}];

// exports.seed = function(knex, Promise) {
//     let seedPromises = units.map((unit) => {
//         return knex('unit').insert(unit)
//     });
//     return knex('unit').del().then(() => {
//         return Promise.all(seedPromises);
//   	});
// };
