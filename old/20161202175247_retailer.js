"use strict";
exports.up = function(knex, Promise) {
    return knex.schema.createTable('retailer', table => {
        table.increments();
        table.string('name', 'varchar(255)').defaultTo('').notNullable();
        table.string('location', 'varchar(255)').defaultTo('').notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('retailer');
};
