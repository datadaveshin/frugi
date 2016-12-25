"use strict";

let products = [{
  id: 1,
  name: 'peanut butter',
  created_at: new Date('2016-12-09 12:30:45 UTC'),
  updated_at: new Date('2016-12-09 12:30:45 UTC')
}, {
  id: 2,
  name: 'jelly',
  created_at: new Date('2016-12-09 12:35:45 UTC'),
  updated_at: new Date('2016-12-09 12:35:45 UTC')
}, {
  id: 3,
  name: 'bread',
  created_at: new Date('2016-12-09 12:35:45 UTC'),
  updated_at: new Date('2016-12-09 12:35:45 UTC')
}, {
  id: 4,
  name: 'eggs',
  created_at: new Date('2016-12-09 12:40:45 UTC'),
  updated_at: new Date('2016-12-09 12:40:45 UTC')
}, {
  id: 5,
  name: 'milk',
  created_at: new Date('2016-12-09 12:40:45 UTC'),
  updated_at: new Date('2016-12-09 12:40:45 UTC')
}, {
  id: 6,
  name: 'shampoo',
  created_at: new Date('2016-12-09 12:45:45 UTC'),
  updated_at: new Date('2016-12-09 12:45:45 UTC')
}, {
  id: 7,
  name: 'conditioner',
  created_at: new Date('2016-12-09 12:45:45 UTC'),
  updated_at: new Date('2016-12-09 12:45:45 UTC')
}, {
  id: 8,
  name: 'paper towels',
  created_at: new Date('2016-12-09 12:50:45 UTC'),
  updated_at: new Date('2016-12-09 12:50:45 UTC')
}, {
  id: 9,
  name: 'toilet paper',
  created_at: new Date('2016-12-09 12:50:45 UTC'),
  updated_at: new Date('2016-12-09 12:50:45 UTC')
}, {
  id: 10,
  name: 'laundry soap',
  created_at: new Date('2016-12-09 12:50:45 UTC'),
  updated_at: new Date('2016-12-09 12:50:45 UTC')
}];

exports.seed = function(knex, Promise) {
    let seedPromises = products.map((product) => {
        return knex('products').insert(product)
    });
    return knex('products').del().then(() => {
        return Promise.all(seedPromises);
  	});
};
