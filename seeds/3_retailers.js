"use strict";

let retailers = [{
  id: 1,
  name: 'target',
  city: 'albany',
  state: 'ca',
  created_at: new Date('2016-12-10 12:30:45 UTC'),
  updated_at: new Date('2016-12-10 12:30:45 UTC')
}, {
  id: 2,
  name: 'costco',
  city: 'richmond',
  state: 'ca',
  created_at: new Date('2016-12-10 12:30:45 UTC'),
  updated_at: new Date('2016-12-10 12:30:45 UTC')
}, {
  id: 3,
  name: 'lucky',
  city: 'el cerrito',
  state: 'ca',
  created_at: new Date('2016-12-10 12:30:45 UTC'),
  updated_at: new Date('2016-12-10 12:30:45 UTC')
}, {
  id: 4,
  name: 'safeway',
  city: 'albany',
  state: 'ca',
  created_at: new Date('2016-12-10 12:30:45 UTC'),
  updated_at: new Date('2016-12-10 12:30:45 UTC')
}, {
  id: 5,
  name: 'safeway',
  city: 'berkeley',
  state: 'ca',
  created_at: new Date('2016-12-10 12:30:45 UTC'),
  updated_at: new Date('2016-12-10 12:30:45 UTC')
}, {
  id: 6,
  name: 'home depot',
  city: 'richmond',
  state: 'ca',
  created_at: new Date('2016-12-11 12:35:45 UTC'),
  updated_at: new Date('2016-12-11 12:35:45 UTC')
}, {
  id: 7,
  name: 'safeway',
  city: 'vancouver',
  state: 'wa',
  created_at: new Date('2016-12-11 12:35:45 UTC'),
  updated_at: new Date('2016-12-11 12:35:45 UTC')
}, {
  id: 8,
  name: 'fred meyers',
  city: 'vancouver',
  state: 'wa',
  created_at: new Date('2016-12-11 12:35:45 UTC'),
  updated_at: new Date('2016-12-11 12:35:45 UTC')
}, {
  id: 9,
  name: 'winco',
  city: 'vancouver'
  state: 'wa',
  created_at: new Date('2016-12-11 12:35:45 UTC'),
  updated_at: new Date('2016-12-11 12:35:45 UTC')
}, {
  id: 10,
  name: 'bimart',
  city: 'vancouver',
  state: 'wa',
  created_at: new Date('2016-12-11 12:35:45 UTC'),
  updated_at: new Date('2016-12-11 12:35:45 UTC')
}];

exports.seed = function(knex, Promise) {
    let seedPromises = retailers.map((retailer) => {
        return knex('retailers').insert(retailer)
    });
    return knex('retailers').del().then(() => {
        return Promise.all(seedPromises);
  	});
};
