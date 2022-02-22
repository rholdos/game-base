'use strict';

const Schema = use('Schema');

class ClansSchema extends Schema {
  up() {
    this.create('clans', (table) => {
      table.increments()
			table.string('name', 50).notNullable().unique();
			table.string('icon', 10).notNullable();
			table.integer('leader').unsigned().references('id').inTable('users');
			table.integer('member_2').unsigned().references('id').inTable('users');
			table.integer('member_3').unsigned().references('id').inTable('users');
			table.integer('member_4').unsigned().references('id').inTable('users');
			table.integer('member_5').unsigned().references('id').inTable('users');
			table.integer('games').unsigned().default(Math.round(Math.random() * 101));
			table.integer('ranking').unsigned().default(Math.round(Math.random() * 101));
      table.timestamps();
    })
  }

  down() {
    this.drop('clans');
  }
}

module.exports = ClansSchema;
