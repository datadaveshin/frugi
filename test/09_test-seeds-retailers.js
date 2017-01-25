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
suite('Test Seeds - Retailers', () => {
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

    test('retailers rows', (done) => {
        knex('retailers').orderBy('id', 'ASC')
        .then((actual) => {
            const expected = [{
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
              city: 'vancouver',
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
