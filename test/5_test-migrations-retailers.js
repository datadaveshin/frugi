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
suite('Test Migrations - Retailers', () => {
    before((done) => {
        knex.migrate.latest()
        .then(() => {
            done();
        })
        .catch((err) => {
            done(err);
        });
    });

    test('retailers columns', (done) => {
        knex('retailers').columnInfo()
        .then((actual) => {
            const expected = {
                id: {
                    type: 'integer',
                    maxLength: null,
                    nullable: false,
                    defaultValue: 'nextval(\'retailers_id_seq\'::regclass)'
                },

                name: {
                    type: 'character varying',
                    maxLength: 255,
                    nullable: false,
                    defaultValue: '\'\'::character varying'
                },

                city: {
                    type: 'character varying',
                    maxLength: 255,
                    nullable: false,
                    defaultValue: '\'\'::character varying'
                },

                state: {
                    type: 'character',
                    maxLength: 2,
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
