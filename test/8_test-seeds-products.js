"use strict";

// Set environment
process.env.NODE_ENV = 'test';

// Require
const {suite, test} = require('mocha');
const assert = require('chai').assert;
const expect = require('chai').expect;
const knex = require('../knex')
const supertest = require('supertest');
const app = require('../app');

// Test seeds
suite('Test Seeds - Users', () => {
    before((done) => {
        knex.migrate.latest()
            .then(() => {
                done();
            })
            .catch((err) => {
                done(err);
            });
    });

    beforeEach((done) => {
        knex.seed.run()
            .then(() => {
                done();
            })
            .catch((err) => {
                done(err);
            });
    });

    test('users rows', (done) => {
        knex('products').orderBy('id', 'ASC')
        .then((actual) => {
            const expected = [{
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
              brand: '',
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
              brand: '',
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

            for (let i = 0; i < expected.length; i++) {
                assert.deepEqual(
                    actual[i],
                    expected[i],
                    `Row id=${i + 1} not the same`
                );
            }
            done();
        })
        .catch((err) => {
            done(err);
        });
    });
});
