"use strict";

module.exports = {
    test: {
        client: 'pg',
        connection: 'postgres://localhost/frugi_test',
        pool: {
            min: 2,
            max: 10
        }
    },

    test2: {
        client: 'pg',
        connection: 'postgres://localhost/frugi_test2',
        pool: {
            min: 2,
            max: 10
        }
    },

    development: {
        client: 'pg',
        connection: 'postgres://localhost/frugi_development',
        pool: {
          min: 2,
          max: 10
        }
    }
}
