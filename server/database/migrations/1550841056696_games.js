'use strict';

const Schema = use('Schema');

class GamesSchema extends Schema {
  up() {
    this.create('games', (table) => {
      table.increments();
      table.integer('user_id').unsigned().references('id').inTable('users');
      table.integer('game_id').unsigned().notNullable().unique();
      table.string('title', 100).notNullable().unique();
			table.string('purchase_date', 50).notNullable();
      table.timestamps();
    })
  }

  down() {
    this.drop('games');
  }
}

module.exports = GamesSchema;
