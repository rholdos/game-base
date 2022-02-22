<template>
	<div id="main-page" v-if="this.$store.getters.isLoggedIn">
		<div class="wrapper">
			<side-bar></side-bar>
			<Navigation />
			<main-bar></main-bar>
		</div>
	</div>
</template>

<script>
	import * as functions from '../../js/functions.js'
	import SideBar from "../layout/SideBar.vue"
	import Navigation from '../layout/Navigation.vue'
	import MainBar from "../layout/MainBar.vue"
	export default {
		name: 'MainPage',
		components: {
			SideBar,
			Navigation,
			MainBar
		},
		data () {
			return {
				startTime: null,
				endTime: null
			}
		},
		beforeCreate() {
			if (!this.$store.getters.isLoggedIn) {
				functions.redirect('/login');
			}
		},
		beforeMount() {
			this.$data.startTime = new Date().getTime();
		},
		beforeDestroy() {
			this.$data.endTime = new Date().getTime();
		},
		destroyed() {
			this.updateGameplay();
		},
		methods: {
			updateGameplay: async function () {
				let user = this.$store.state.user;
				let type = 'updateGameplay';
				let gameplay = null;
				functions.serverAxios().get(`/users/${user.id}`)
					.then((response) => {
						gameplay = response.data.gameplay + Math.round((this.$data.endTime - this.$data.startTime) / 1000);
						functions.serverAxios().patch(`/users/${user.id}`, {
							type,
							gameplay
						});
					});
			}
		}
	}
</script>
