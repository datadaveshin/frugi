"use strict";
exports.up = function(knex, Promise) {
    return knex.schema.createTable('retail_products', table => {
        table.increments();
        table.string('item_name', 'varchar(255)').defaultTo('').notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('retail_products');
};
