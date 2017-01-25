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
        knex('users').orderBy('id', 'ASC')
        .then((actual) => {
            const expected = [{
                id: 1,
                user_name: 'Wilson',
                email: 'wilson1@fakeyahoo.com',
                hashed_password: '$2a$12$F3ChLyiBOye4.nSQyPNtK.0udpRDKZod5zlsCSFPFLN1JkYBznVrG',
                created_at: new Date('2016-12-08 12:15:45 UTC'),
                updated_at: new Date('2016-12-08 12:15:45 UTC')
                }, {
                id: 2,
                user_name: 'Tonka',
                email: 'tonka2@fakegmail.com',
                hashed_password: '$2a$12$Wl6zn24NOWEkUg9JCMAfBumGQxZhqXI7HbuAnKuaEViwzGgUPjqs6',
                created_at: new Date('2016-12-08 12:20:00 UTC'),
                updated_at: new Date('2016-12-08 12:20:00 UTC')
                }, {
                id: 3,
                user_name: 'Patty',
                email: 'patty3@fakeaol.com',
                hashed_password: '$2a$12$SLGSpfdCjaIAZhUQX.gWjeUiwW8ZaDRvigWTEcQQ91IFUxFUmVQTC',
                created_at: new Date('2016-12-08 12:25:30 UTC'),
                updated_at: new Date('2016-12-08 12:25:30 UTC')
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
