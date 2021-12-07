
<template>
	<div id="navigation">
		<div class="row">
			<div class="col-5 col-md-3 p-0">
				<div class="view">
					<span class="name">{{ this.$store.state.view }}</span>
				</div>
			</div>
			<div class="col-7 col-md-9 p-0">
				<div class="row">
					<div class="col-4 d-none d-md-block p-0">
						<div class="search">
							<input type="text" placeholder="Search...">
						</div>
					</div>
					<div class="col-4 d-none d-md-block p-0">
						<div class="icons">
							<button class="icon releases-icon" @click="toReleases"></button>
							<button class="icon shop-icon" @click="toShop"></button>
							<button class="icon logout-icon" @click="logout"></button>
						</div>
					</div>
					<div class="col-12 col-md-4 p-0">
						<div class="user">
							<img class="icon" :src=" (this.$store.state.user.avatar) ? require('../../icons/avatars/' + this.$store.state.user.avatar +'.svg') : ''"/>
							<span class="name" @click="toProfile">{{ this.$store.state.user.username }}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import * as functions from '../../js/functions.js'
	export default {
		name: 'Navigation',
		methods: {
			logout: async function () {
				this.$store.state.token = null;
				functions.redirect('/login');
			},
			toShop: async function () { functions.redirect('/shop'); },
			toReleases: async function () { functions.redirect('/releases'); },
			toProfile: async function () { functions.redirect('/profile'); }
		}
	}
</script>
