
import { globals } from './globals.js';
import Router from './router.js';
import Store from './store.js';
let $ = globals.$jquery;

export function resetVuexState() {
	Store.replaceState({
		url: null,
		view: null,
		token: null,
		user: null,
		clan: null
	});
}

export function redirect(path) {
	Router.push(path);
	Store.state.url = Router.currentRoute.path;
	Store.state.view = path.charAt(1).toUpperCase() + path.slice(2);
	let sidebarClass = '.' + path.slice(1) + '-tab';
	$(sidebarClass).addClass('active').siblings().removeClass('active');
}

export function checkInput(event) {
	$(event.currentTarget).removeClass('valid-input invalid-input');
	if (event.currentTarget.value) {
		if ($(event.currentTarget).parsley().isValid()) {
			$(event.currentTarget).addClass('valid-input');
		} else {
			$(event.currentTarget).addClass('invalid-input');
		}
	}
}

export function serverAxios() {
	return globals.$axios.create({
		baseURL: '/server',
		headers: {
			Authorization: `Bearer ${Store.state.token}`
		}
	});
}

export function updateUserObject(id) {
	if (id) {
		serverAxios().get(`/users/${id}`)
			.then( (response) => {
				Store.state.user = response.data;
			});
	}
}

export function updateClanObject(id) {
	if (id) {
		serverAxios().get(`/clans/${id}`)
			.then( (response) => {
				let clan = response.data;
				serverAxios().get(`/users/${clan.leader}`)
					.then( (response) => { clan.leader = response.data; });
				if (clan.member_2) {
					serverAxios().get(`/users/${clan.member_2}`)
						.then( (response) => { clan.member_2 = response.data; });
				}
				if (clan.member_3) {
					serverAxios().get(`/users/${clan.member_3}`)
						.then( (response) => { clan.member_3 = response.data; });
				}
				if (clan.member_4) {
					serverAxios().get(`/users/${clan.member_4}`)
						.then( (response) => { clan.member_4 = response.data; });
				}
				if (clan.member_5) {
					serverAxios().get(`/users/${clan.member_5}`)
						.then( (response) => { clan.member_5 = response.data; });
				}
				Store.state.clan = clan;
			});
	}
}

export function updateClanInvitationObject(id) {
	if (id) {
		serverAxios().get(`/clans/${id}`)
			.then( (response) => {
				let clan_invitation = {};
				clan_invitation.date = Store.state.user.clan_invitation_date;
				clan_invitation.id = response.data.id;
				clan_invitation.name = response.data.name;
				clan_invitation.icon = response.data.icon;
				clan_invitation.ranking = response.data.ranking;
				serverAxios().get(`/users/${response.data.leader}`)
					.then( (response) => { clan_invitation.leader = response.data.username; });
				clan_invitation.members = 1;
				if (response.data.member_2) { clan_invitation.members++ }
				if (response.data.member_3) { clan_invitation.members++ }
				if (response.data.member_4) { clan_invitation.members++ }
				if (response.data.member_5) { clan_invitation.members++ }
				Store.state.user.clan_invitation = clan_invitation;
			});
	}
}
