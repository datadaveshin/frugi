"use strict";
exports.up = function(knex, Promise) {
    return knex.schema.createTable('price', table => {
        table.increments();
        table.string('brand', 'varchar(255)').defaultTo('').notNullable();
        table.decimal('price', 'varchar(255)').defaultTo('').notNullable();
        table.decimal('size', 'varchar(255)').defaultTo('').notNullable();
        table.timestamps(true, true);
        table.integer('retailer_id').notNullable().references('id').inTable('retailer').onDelete('CASCADE');
        table.integer('unit_id').notNullable().references('id').inTable('units').onDelete('CASCADE');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('price');
};
