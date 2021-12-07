
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		url: null,
		view: null,
		token: null,
		user: null,
		clan: null
	},
	getters: {
		isLoggedIn(state) {
			return !!state.token;
		},
		isClanLeader(state) {
			return state.user.id === state.clan.leader.id;
		}
	}
});
