"use strict";

// Set environment
process.env.NODE_ENV = 'test';

// Require
const { suite, test } = require('mocha');
const assert = require('chai').assert;
const expect = require('chai').expect;
const knex = require('../knex');
const supertest = require('supertest');
const app = require('../app');


// Test Migrations:
suite('Test Migrations - Prices', () => {
    before((done) => {
        knex.migrate.latest()
        .then(() => {
            done();
        })
        .catch((err) => {
            done(err);
        });
    });

    test('prices columns', (done) => {
        knex('prices').columnInfo()
        .then((actual) => {
            const expected = {
                id: {
                    type: 'integer',
                    maxLength: null,
                    nullable: false,
                    defaultValue: 'nextval(\'prices_id_seq\'::regclass)'
                },

                price: {
                    type: 'numeric',
                    maxLength: null,
                    nullable: false,
                    defaultValue: null
                },

                amount: {
                    type: 'numeric',
                    maxLength: null,
                    nullable: false,
                    defaultValue: null
                },

                units: {
                    type: 'character varying',
                    maxLength: 255,
                    nullable: false,
                    defaultValue: '\'\'::character varying'
                },

                product_id: {
                    type: 'numeric',
                    maxLength: null,
                    nullable: false,
                    defaultValue: null
                },

                retailer_id: {
                    type: 'integer',
                    maxLength: null,
                    nullable: false,
                    defaultValue: null
                },

                user_id: {
                    type: 'integer',
                    maxLength: null,
                    nullable: false,
                    defaultValue: null
                },

                created_at: {
                    type: 'timestamp with time zone',
                    maxLength: null,
                    nullable: false,
                    defaultValue: 'now()'
                },

                updated_at: {
                    type: 'timestamp with time zone',
                    maxLength: null,
                    nullable: false,
                    defaultValue: 'now()'
                }
            };

            for (const column in expected) {
                assert.deepEqual(
                    actual[column],
                    expected[column],
                    `Column ${column} is not the same`
                );
            }
            done();
        })
        .catch((err) => {
            done(err);
        });
    });
});
