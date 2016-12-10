"use strict";
let products = [{
  id: 1,
  name: 'Peanut butter',
}, {
  id: 2,
  name: 'Milk',
}, {
  id: 3,
  name: 'Eggs',
}, {
  id: 4,
  name: 'Soylent Green',
}, {
  id: 5,
  name: 'Salmon',
}, {
  id: 6,
  name: 'laundry soap',
}, {
  id: 7,
  name: 'TV',
}, {
  id: 8,
  name: 'protein bars',
}];

exports.seed = function(knex, Promise) {
    let seedPromises = products.map((product) => {
        return knex('products').insert(product)
    });
    return knex('products').del().then(() => {
        return Promise.all(seedPromises);
  	});
};
