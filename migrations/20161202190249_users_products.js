"use strict";
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users_products', table => {
        table.increments();
        table.integer('user_id').notNullable().references('id').inTable('users').onDelete('CASCADE');
        table.integer('product_id').notNullable().references('id').inTable('products').onDelete('CASCADE');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users_products');
};
