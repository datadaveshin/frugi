"use strict";
exports.up = function(knex, Promise) {
    return knex.schema.createTable('prices', table => {
        table.increments();
        table.string('brand', 'varchar(255)').defaultTo('');
        table.decimal('price').notNullable();
        table.decimal('size').notNullable();
        table.string('units').defaultTo('').notNullable();
        table.string('retailer', 'varchar(255)').defaultTo('').notNullable();
        table.boolean('sale');
        table.timestamps(true, true);
        table.integer('product_id').notNullable().references('id').inTable('products').onDelete('CASCADE');
        // table.integer('retailer_id').notNullable().references('id').inTable('retailer').onDelete('CASCADE');
        // table.integer('unit_id').notNullable().references('id').inTable('units').onDelete('CASCADE');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('prices');
};
