"use strict";
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users_products', table => {
        table.increments();
        table.integer('user_id').notNullable().references('id').inTable('users').onDelete('CASCADE');
        table.integer('unit_id').notNullable().references('id').inTable('units').onDelete('CASCADE');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users_products');
};
