"use strict";
exports.up = function(knex, Promise) {
    return knex.schema.createTable('prices', table => {
        table.increments();
        table.decimal('price').notNullable();
        table.decimal('amount').notNullable();
        table.string('units').notNullable();
        table.integer('product_id').notNullable().references('id').inTable('products').onDelete('CASCADE');
        table.integer('retailer_id').notNullable().references('id').inTable('retailers').onDelete('CASCADE');
        table.integer('user_id').notNullable().references('id').inTable('users').onDelete('CASCADE');
        table.timestamps(true, true);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('prices');
};
