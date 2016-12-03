#!/bin/sh
drobdb frugi_test --if-exists
createdb frugi_test
knex migrate --env test
knex seed:run --env test

dropdb frugi_development --if-exists
createdb frugi_test
knex migrate --env test
knex seed:run --env test
