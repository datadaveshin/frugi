"use strict";

let products = [{
  id: 1,
  name: 'peanut butter',
  brand: 'jif',
  created_at: new Date('2016-12-09 12:30:45 UTC'),
  updated_at: new Date('2016-12-09 12:30:45 UTC')
}, {
  id: 2,
  name: 'peanut butter',
  brand: 'sunny select',
  created_at: new Date('2016-12-09 12:35:45 UTC'),
  updated_at: new Date('2016-12-09 12:35:45 UTC')
}, {
  id: 3,
  name: 'bread',
  brand: 'orowheat',
  created_at: new Date('2016-12-09 12:35:45 UTC'),
  updated_at: new Date('2016-12-09 12:35:45 UTC')
}, {
  id: 4,
  name: 'eggs',
  brand: 'organic',
  created_at: new Date('2016-12-09 12:40:45 UTC'),
  updated_at: new Date('2016-12-09 12:40:45 UTC')
}, {
  id: 5,
  name: 'milk',
  brand: 'lucern',
  created_at: new Date('2016-12-09 12:40:45 UTC'),
  updated_at: new Date('2016-12-09 12:40:45 UTC')
}, {
  id: 6,
  name: 'shampoo',
  created_at: new Date('2016-12-09 12:45:45 UTC'),
  updated_at: new Date('2016-12-09 12:45:45 UTC')
}, {
  id: 7,
  name: 'peanut butter',
  brand: 'skippy',
  created_at: new Date('2016-12-09 12:45:45 UTC'),
  updated_at: new Date('2016-12-09 12:45:45 UTC')
}, {
  id: 8,
  name: 'paper towels',
  brand: null,
  created_at: new Date('2016-12-09 12:50:45 UTC'),
  updated_at: new Date('2016-12-09 12:50:45 UTC')
}, {
  id: 9,
  name: 'toilet paper',
  brand: 'kirkland',
  created_at: new Date('2016-12-09 12:50:45 UTC'),
  updated_at: new Date('2016-12-09 12:50:45 UTC')
}, {
  id: 10,
  name: 'laundry soap',
  brand: 'tide',
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
