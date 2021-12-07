
'use strict';

const Schema = use('Schema');

class WishesSchema extends Schema {
	up () {
		this.create('wishes', (table) => {
			table.increments();
			table.integer('user_id').unsigned().references('id').inTable('users');
			table.integer('wish_id').unsigned().notNullable().unique();
			table.string('title', 100).notNullable().unique();
			table.string('wish_date', 50).notNullable();
			table.timestamps();
		})
	}

	down () {
		this.drop('wishes');
	}
}

module.exports = WishesSchema;
