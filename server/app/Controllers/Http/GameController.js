'use strict';

const Game = use('App/Models/Game');
const AuthorizationService = use('App/Services/AuthorizationService');

class GameController {
	async select({ auth }) {
		let user = await auth.getUser();
		return await user.games().fetch();
	}

	async insert({ auth, request }) {
		let user = await auth.getUser();
		let { game_id, title } = request.all();
		let game = new Game();
		let now = new Date();
		let purchase_date = now.toDateString().slice(4);
		game.fill({
			game_id,
			title,
			purchase_date
		});
		await user.games().save(game);
		return game;
	}
}

module.exports = GameController;
