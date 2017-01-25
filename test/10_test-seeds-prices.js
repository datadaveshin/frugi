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
suite('Test Seeds - Prices', () => {
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

    test('prices rows', (done) => {
        knex('prices').orderBy('id', 'ASC').limit(5)
        .then((actual) => {
            const expected = [{
                id: 1,
                price: '5.99',
                amount: '1.00',
                units: 'lb',
                product_id: 1,
                retailer_id: 3,
                user_id: 1,
                created_at: new Date('2016-12-11 12:05:00 UTC'),
                updated_at: new Date('2016-12-11 12:05:00 UTC')
            },{
                id: 2,
                price: '3.99',
                amount: '1.00',
                units: 'lb',
                product_id: 2,
                retailer_id: 3,
                user_id: 1,
                created_at: new Date('2016-12-11 12:05:00 UTC'),
                updated_at: new Date('2016-12-11 12:05:00 UTC')
            },{
                id: 3,
                price: '0.25',
                amount: '20.00',
                units: 'dry oz',
                product_id: 3,
                retailer_id: 3,
                user_id: 1,
                created_at: new Date('2016-12-11 12:05:00 UTC'),
                updated_at: new Date('2016-12-11 12:05:00 UTC')
            },{
                id: 4,
                price: '3.49',
                amount: '1.00',
                units: 'dozen',
                product_id: 4,
                retailer_id: 3,
                user_id: 1,
                created_at: new Date('2016-12-11 12:05:00 UTC'),
                updated_at: new Date('2016-12-11 12:05:00 UTC')
            },{
                id: 5,
                price: '2.99',
                amount: '2.00',
                units: 'qt',
                product_id: 5,
                retailer_id: 3,
                user_id: 1,
                created_at: new Date('2016-12-11 12:05:00 UTC'),
                updated_at: new Date('2016-12-11 12:05:00 UTC')
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
