"use strict";
exports.up = function(knex, Promise) {
    return knex.schema.createTable('products', table => {
        table.increments();
        table.string('name', 'varchar(255)').defaultTo('').notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('products');
};
