
<template>
	<div class="player-card">
		<div class="player-card-image">
			<img :src="($props.user && $props.user.avatar) ? require('../../icons/avatars/' + $props.user.avatar + '.svg') : require('../../icons/plus.svg')" alt="Player icon">
		</div>
		<div class="player-card-text">
			<h2 class="name">{{ $props.name }}</h2>
			<h4 class="role">{{ $props.role }}</h4>
			<div v-if="$props.user">
				<span class="status">{{ ($props.user.id === this.$store.state.clan.leader.id) ? 'Clan Leader' : (!$props.user.clan_join_date) ? 'Invitation pending' : '' }}</span>
				<h6 class="date">{{ ($props.user.clan_join_date) ? `Joined: ${$props.user.clan_join_date}` : `Invited: ${$props.user.clan_invitation_date}` }}</h6>
				<h6 class="accuracy">{{ $props.user.accuracy ? `Accuracy: ${$props.user.accuracy} %` : 'Accuracy N/A' }}</h6>
			</div>
			<div v-if="!$props.user">
				<button class="button-secondary invite-button" @click="$root.$emit('invite-clan-member-open-modal')">Invite new member</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'PlayerCard',
		props: ['user','name','role']
	}
</script>
