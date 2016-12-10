"use strict";
let retailers = [{
  id: 1,
  name: 'Monterey Market',
  location: 'Berkeley',
}, {
  id: 2,
  name: 'Berkeley Bowl',
  location: 'Berkeley',
}, {
  id: 3,
  name: 'Costco',
  location: 'Richmond',
}, {
  id: 4,
  name: 'Target',
  location: 'Albany',
}, {
  id: 5,
  name: 'Lucky',
  location: 'El Cerrito',
}];

exports.seed = function(knex, Promise) {
    let seedPromises = retailers.map((product) => {
        return knex('product').insert(product)
    });
    return knex('product').del().then(() => {
        return Promise.all(seedPromises);
  	});
};
