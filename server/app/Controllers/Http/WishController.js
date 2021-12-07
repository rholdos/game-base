
'use strict';

const Wish = use('App/Models/Wish');
const AuthorizationService = use('App/Services/AuthorizationService');

class WishController {
	async select({ auth }) {
		let user = await auth.getUser();
		return await user.wishes().fetch();
	}

	async insert({ auth, request }) {
		let user = await auth.getUser();
		let { wish_id, title } = request.all();
		let wish = new Wish();
		let now = new Date();
		let wish_date = now.toDateString().slice(4);
		wish.fill({
			wish_id,
			title,
			wish_date
		});
		await user.wishes().save(wish);
		return wish;
	}

	async delete({ auth, request, params }) {
		let user = await auth.getUser();
		let wish = await Wish.find(params.id);
		AuthorizationService.verifyPermission(wish, user);
		await wish.delete();
		return wish;
	}
}

module.exports = WishController;
