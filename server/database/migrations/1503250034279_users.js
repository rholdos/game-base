'use strict';

const Schema = use('Schema');

class UsersSchema extends Schema {
	up() {
		this.create('users', (table) => {
			table.increments();
			table.string('email', 100).notNullable().unique();
			table.string('username', 50).notNullable().unique();
			table.string('password', 255).notNullable();
			table.string('region', 50).default('Unknown');
			table.string('country', 50).default('Unknown');
			table.string('avatar', 10).default('boy-1');
			table.integer('accuracy').unsigned().default(Math.floor(Math.random() * 101));
			table.integer('gameplay').unsigned().default(0);
			table.integer('clan_invitation').unsigned().references('id').inTable('clans');
			table.integer('clan_id').unsigned().references('id').inTable('clans');
			table.string('clan_invitation_date', 50);
			table.string('clan_join_date', 50);
			table.timestamps();
		})
	}

	down() {
		this.drop('users');
	}
}

module.exports = UsersSchema;
