<template>
	<div id="side-bar">
		<div class="logo">
			<img src="../../icons/dashboard.svg" alt="gamebase-logo">
			<span>GameBase</span>
		</div>
		<div class="menu">
			<ul class="list-unstyled">
				<li class="tab dashboard-tab" @click="toDashboard">
					<img src="../../icons/dashboard.svg" alt="Dashboard Icon">
					<span>Dashboard</span>
				</li>
				<li class="tab profile-tab" @click="toProfile">
					<img src="../../icons/profile.svg" alt="Profile Icon">
					<span>Profile</span>
				</li>
				<li class="tab clan-tab" @click="toClan">
					<img src="../../icons/clan.svg" alt="Clan Icon">
					<span>Clan</span>
				</li>
				<li class="tab releases-tab" @click="toReleases">
					<img src="../../icons/releases.svg" alt="Releases Icon">
					<span>Releases</span>
				</li>
				<li class="tab shop-tab" @click="toShop">
					<img src="../../icons/shop.svg" alt="Shop Icon">
					<span>Shop</span>
				</li>
				<li class="tab credits-tab" @click="toCredits">
					<img src="../../icons/credits.svg" alt="Credits Icon">
					<span>Credits</span>
				</li>
			</ul>
		</div>
		<div class="status">
			<div class="date">
				<img src="../../icons/date.svg" alt="date-icon">
				<span>{{ dateInstance.date }}</span>
			</div>
			<div class="time">
				<img src="../../icons/time.svg" alt="time-icon">
				<span>{{ dateInstance.time }}</span>
			</div>
		</div>
	</div>
</template>

<script>
	import * as functions from '../../js/functions.js'
	export default {
		name: 'SideBar',
		data () {
			return {
				dateInstance: []
			}
		},
		beforeMount() { this.prepareDateAndTime(); },
		mounted() {
			functions.redirect(this.$route.path);
			window.setInterval(this.prepareDateAndTime, 10000);
		},
		methods: {
			prepareDateAndTime: async function () {
				let dateInstance = new Date();
				let date = dateInstance.toDateString().slice(4);
				let time = dateInstance.toTimeString().slice(0,5);
				this.$data.dateInstance.date = date;
				this.$data.dateInstance.time = time;
				this.$forceUpdate();
			},
			toDashboard: function () { functions.redirect('/dashboard'); },
			toProfile: function () { functions.redirect('/profile'); },
			toClan: function () { functions.redirect('/clan'); },
			toReleases: function () { functions.redirect('/releases'); },
			toShop: function () { functions.redirect('/shop'); },
			toCredits: function () { functions.redirect('/credits'); }
		}
	}
</script>
