"use strict";
exports.up = function(knex, Promise) {
    return knex.schema.createTable('products', table => {
        table.increments();
        table.string('name', 'varchar(255)').defaultTo('').notNullable();
        table.string('brand', 'varchar(255)').defaultTo('');
        table.timestamps(true, true);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('products');
};
