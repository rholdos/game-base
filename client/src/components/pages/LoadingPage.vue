
<template>
	<div id="loading-page">
			<BigLoader
				text="« Loading »"
			></BigLoader>
	</div>
</template>

<script>
	import * as functions from '../../js/functions.js'
	import BigLoader from '../elements/BigLoader.vue'
	export default {
		name: 'LoadingPage',
		components: {
			BigLoader
		},
		data () {
			return {
				loaded: false
			}
		},
		mounted() {
			if (this.$store.getters.isLoggedIn) {
				this.fetchData();
				setTimeout(this.showMainPage, 1500);
			} else {
				setTimeout(this.showLoginPage, 1500);
			}
		},
		methods: {
			fetchData: async function () {
				functions.serverAxios().get('users')
					.then( (response) => {
						let user = response.data;
						this.$store.state.user = user;
						functions.updateClanObject(user.clan_id);
						functions.updateClanInvitationObject(user.clan_invitation);
					});
			},
			showMainPage: async function () {
				functions.redirect('/dashboard');
			},
			showLoginPage: async function () {
				functions.redirect('/login');
			}
		}
	}
</script>
