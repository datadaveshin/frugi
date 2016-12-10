"use strict";
let prices = [{
  id: 1,
  brand: 'Jif',
  price: 2.09,
  size: '20',
  units: 'dry oz',
  retailer: 'Lucky',
  sale: false,
  created_at: new Date('2016-12-08 12:35:45 UTC'),
  updated_at: new Date('2016-12-08 12:35:45 UTC'),
  product_id: 1
}, {
  id: 2,
  brand: 'Skippy',
  price: 2.09,
  size: '20',
  units: 'dry oz',
  retailer: 'Lucky',
  sale: false,
  created_at: new Date('2016-12-08 12:35:46 UTC'),
  updated_at: new Date('2016-12-08 12:35:46 UTC'),
  product_id: 1
}, {
  id: 3,
  brand: 'Soylent',
  price: 5.50,
  size: '1',
  units: 'pint',
  retailer: 'Safeway',
  sale: false,
  created_at: new Date('2016-12-08 12:35:46 UTC'),
  updated_at: new Date('2016-12-08 12:35:46 UTC'),
  product_id: 4
}, {
  id: 4,
  brand: 'Tide',
  price: 12.99,
  size: '3',
  units: 'lb',
  retailer: 'Target',
  sale: false,
  created_at: new Date('2016-12-08 12:35:47 UTC'),
  updated_at: new Date('2016-12-08 12:35:47 UTC'),
  product_id: 6
}, {
  id: 5,
  brand: 'Tide',
  price: 12.09,
  size: '3',
  units: 'lb',
  retailer: 'Lucky',
  sale: false,
  created_at: new Date('2016-12-08 12:35:47 UTC'),
  updated_at: new Date('2016-12-08 12:35:47 UTC'),
  product_id: 6
}, {
  id: 6,
  brand: 'kirkland',
  price: 13.00,
  size: '16',
  units: 'dry oz',
  retailer: 'Costco',
  sale: true,
  created_at: new Date('2016-12-08 12:35:47 UTC'),
  updated_at: new Date('2016-12-08 12:35:47 UTC'),
  product_id: 8
}, {
  id: 7,
  brand: 'Tide',
  price: 13.49,
  size: '3',
  units: 'lb',
  retailer: 'Costco',
  sale: false,
  created_at: new Date('2016-12-08 12:35:47 UTC'),
  updated_at: new Date('2016-12-08 12:35:47 UTC'),
  product_id: 6
}, {
  id: 8,
  brand: 'milk',
  price: 3.99,
  size: '1',
  units: 'quart',
  retailer: 'Lucky',
  sale: false,
  created_at: new Date('2016-12-08 12:35:47 UTC'),
  updated_at: new Date('2016-12-08 12:35:47 UTC'),
  product_id: 2
}, {
  id: 9,
  brand: 'Jif',
  price: 3.49,
  size: '40',
  units: 'dry oz',
  retailer: 'Lucky',
  sale: false,
  created_at: new Date('2016-12-08 12:15:45 UTC'),
  updated_at: new Date('2016-12-08 12:15:45 UTC'),
  product_id: 1
},];

exports.seed = function(knex, Promise) {
    let seedPromises = prices.map((price) => {
        return knex('prices').insert(price)
    });
    return knex('prices').del().then(() => {
        return Promise.all(seedPromises);
  	});
};
