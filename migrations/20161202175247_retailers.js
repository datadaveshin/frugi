"use strict";
exports.up = function(knex, Promise) {
    return knex.schema.createTable('retailers', table => {
        table.increments();
        table.string('name', 'varchar(64)').defaultTo('').notNullable();
        table.string('city', 'varchar(64)').defaultTo('').notNullable();
        table.string('state', 'varchar(2)').defaultTo('').notNullable();
        table.id()
        table.timestamps(true, true);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('retailers');
};
