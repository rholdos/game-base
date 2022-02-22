<template>
	<div class="clan-card">
		<div class="clan-card-icon">
			<img src="../../icons/teamwork.svg" alt="Icon">
		</div>
		<div class="clan-card-text">
			<h3>{{ (this.$store.state.clan) ? this.$store.state.clan.name : (this.$store.state.user.clan_invitation) ? 'New clan invitation' : 'No clan' }}</h3>
			<h6>{{ ((this.$store.state.clan)) ? 'Ranking: ' + this.$store.state.clan.ranking + ' %' : (this.$store.state.user.clan_invitation) ? this.$store.state.user.clan_invitation.name : 'You should join one !'}}</h6>
		</div>
		<div class="clan-card-footing">
			<h5>{{ (this.$store.state.clan) ? 'Check your clan' : 'Check clan section' }}</h5>
		</div>
		<div class="clan-card-button">
			<button class="button-secondary" @click="toClan">Go to Clan</button>
		</div>
	</div>
</template>

<script>
	import * as functions from '../../js/functions.js'
	export default {
		name: 'GamePlayCard',
		methods: {
			toClan: function () {
				functions.redirect('/clan');
			}
		}
	}
</script>
