"use strict";

exports.seed = function(knex, Promise) {
    let seedPromises = products.map((product) => {
        return knex('products').insert(product)
    });
    return knex('products').del().then(() => {
        return Promise.all(seedPromises);
  	});
};
