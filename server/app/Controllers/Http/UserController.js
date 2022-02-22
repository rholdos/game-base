'use strict';

const User = use('App/Models/User');
const Hash = use('Hash');

class UserController {
	async login({ request, auth }) {
		let { email, password } = request.all();
		let token = await auth.attempt(email, password);
		return token;
	}

	async register({ request }) {
		let { username, email, password } = request.all();
		await User.create({
			username,
			email,
			password
		});
		return true;
	}

	async selectLogged({ auth, params }) {
		return await auth.getUser();
	}

	async select({ auth, params }) {
		return await User.find(params.id);
	}

	async update({ auth, request, params }) {
		let user = await User.find(params.id);
		if (request.input('type') == 'updateData') {
			let new_username = request.input('new_username');
			let new_email = request.input('new_email');
			let new_region = request.input('new_region');
			let new_country = request.input('new_country');
			user.merge({ username: new_username, email: new_email, region: new_region, country: new_country });
		}
		if (request.input('type') == 'changePassword') {
			let old_password = request.input('old_password');
			let new_password = request.input('new_password');
			let password = user.password;
			if (await Hash.verify(old_password, password)) {
				user.merge({ password: new_password });
			} else {
				return false;
			}
		}
		if (request.input('type') == 'changeAvatar') {
			let new_avatar = request.input('new_avatar');
			user.merge({ avatar: new_avatar });
		}

		if (request.input('type') == 'updateGameplay') {
			let gameplay = request.input('gameplay');
			user.merge({ gameplay: gameplay });
		}

		if (request.input('type') == 'acceptClanInvitation') {
			let new_clan_id = user.clan_invitation;
			let new_clan_join_date = user.clan_invitation_date;
			user.merge({ clan_invitation: null, clan_invitation_date: null, clan_id: new_clan_id, clan_join_date: new_clan_join_date });
		}
		if (request.input('type') == 'removeClanInvitation') {
			user.merge({ clan_invitation: null, clan_invitation_date: null });
		}
		await user.save();
		return user;
	}
}

module.exports = UserController;
