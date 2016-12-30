"use strict";
exports.up = function(knex, Promise) {
    return knex.schema.createTable('retailers', table => {
        table.increments();
        table.string('name', 'varchar(255)').defaultTo('').notNullable();
        table.string('city', 'varchar(255)').defaultTo('').notNullable();
        table.string('state', 'char(2)').defaultTo('').notNullable();
        table.timestamps(true, true);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('retailers');
};
