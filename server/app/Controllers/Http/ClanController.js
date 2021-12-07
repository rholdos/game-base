
'use strict';

const Clan = use('App/Models/Clan');
const Database = use('Database');

class ClanController {
	async select({ auth, params }) {
		return await Clan.find(params.id);
	}

	async insert({ auth, request }) {
		let { name, icon } = request.all();
		let leader = await auth.getUser();
		let clan = await Clan.create({
			name,
			icon
		});
		let now = new Date();
		let date = now.toDateString().slice(4);
		await Database.table('users').where('id', leader.id).update({ clan_id: clan.id, clan_join_date: date });
		await clan.merge({
			leader: leader.id
		})
		await clan.save();
		return clan.id;
	}

	async update({ auth, request, params }) {
		let clan = await Clan.find(params.id);
		if (request.input('type') == 'updateIcon') {
			let new_icon = request.input('new_icon');
			clan.merge({ icon: new_icon });
		}
		if (request.input('type') == 'addMember') {
			let new_member_name = request.input('new_member_name');
			let new_member = await Database.from('users').where('username', new_member_name).first();
			if (!new_member) { return 'member_not_registered'; }
			if (new_member.clan_id) { return 'member_in_clan'; }
			if (new_member.clan_invitation) { return 'member_has_invitation'; }
			let now = new Date();
			let date = now.toDateString().slice(4);
			if (new_member) { await Database.table('users').where('id', new_member.id).update({ clan_invitation: clan.id, clan_invitation_date: date }); }
			if (!clan.member_2) {
				clan.member_2 = new_member.id;
			} else if (!clan.member_3) {
				clan.member_3 = new_member.id;
			} else if (!clan.member_4) {
				clan.member_4 = new_member.id;
			} else if (!clan.member_5) {
				clan.member_5 = new_member.id;
			}
		}
		if (request.input('type') == 'removeMember') {
			let member_id = request.input('member_id');
		  if (clan.member_2 == member_id) { clan.member_2 = null; }
			else if (clan.member_3 == member_id) { clan.member_3 = null; }
			else if (clan.member_4 == member_id) { clan.member_4 = null; }
			else if (clan.member_5 == member_id) { clan.member_5 = null; }
		}
		await clan.save();
		return clan.id;
	}

	// async delete({ auth, request, params }) {
	// 	let user = await auth.getUser();
	// 	let id = params.id;
	// 	let game = await Games.find(id);
	// 	AuthorizationService.verifyPermission(game, user);
	// 	await game.delete();
	// 	return game;
	// }

}

module.exports = ClanController;
