<template>
	<div id="clan">
		<div class="no-clan" v-if="!clan && !clan_invitation">
			<img class="mb-4 no-clan-icon" :src="require('../../icons/clan/clan-0.svg')" alt="Clan icon">
			<h2>You are currently not member of any clan</h2>
			<h5 class="mb-5">You can either ask for an invitation or create you own clan !</h5>
			<transition name="fly-from-top">
				<button class="button" v-b-modal.createClanModal v-show="noClanLoaded" :load="noClanLoaded = true">Create new clan</button>
			</transition>
			<create-clan-modal></create-clan-modal>
		</div>
		<div class="clan-invitation" v-if="!clan && clan_invitation">
			<img class="mb-4 clan-invitation-icon" :src="require('../../icons/clan_invitation.svg')" alt="Clan invitation icon">
			<div class="clan-invitation-text">
				<h2>You have a new clan invitation !</h2>
				<h5>from {{ clan_invitation.date }}</h5>
			</div>
			<div class="clan-invitation-info">
				<div class="icon">
					<img :src="(clan_invitation.icon) ? require('../../icons/clan/' + clan_invitation.icon + '.svg') : ''" alt="Clan icon">
				</div>
				<div class="info">
					<h2 class="name">{{ clan_invitation.name }}</h2>
					<h5 class="leader">Leader: {{ clan_invitation.leader }}</h5>
					<h5 class="members">Members: {{ clan_invitation.members }}</h5>
					<h5 class="ranking">Ranking: {{ clan_invitation.ranking }}</h5>
				</div>
			</div>
			<transition name="fly-from-top">
				<div class="clan-invitation-buttons" v-show="clanInvitationLoaded" :load="clanInvitationLoaded = true">
					<button class="button mr-2 button-secondary" @click="ignoreClanInvitation">Ignore this invitation</button>
					<button class="button ml-2" v-b-modal.acceptClanInvitationModal @click="acceptClanInvitation">Accept this invitation</button>
				</div>
			</transition>
			<icon-text-modal
				modal-id="acceptClanInvitationModal"
				title="Accept clan invitation ..."
				:icon="require('../../icons/success.svg')"
				text="Clan invitation accepted. Welcome to your new clan !"
			></icon-text-modal>
		</div>
		<div class="clan" v-if="clan && !clan_invitation">
			<div class="clan-info">
				<div class="clan-info-section">
					<h4 class="clan">Clan</h4>
					<h1 class="name">{{ clan.name	 }}</h1>
					<h4 class="leader">Leader : {{ clan.leader.username }}</h4>
				</div>
				<div class="clan-info-section">
					<img
						class="icon"
						:class="{ clickable: this.$store.getters.isClanLeader }"
						:src="(clan.icon) ? require('../../icons/clan/' + clan.icon + '.svg') : require('../../icons/clan/clan-0.svg')"
						alt="Clan icon"
						v-b-modal.changeClanIconModal
					>
					<change-clan-icon-modal modal-id="changeClanIconModal" v-if="this.$store.getters.isClanLeader"></change-clan-icon-modal>
				</div>
				<div class="clan-info-section">
					<h5 class="members">Members : {{ clanMembersCount }} / 5</h5>
					<h5 class="games">Games : {{ clan.games }}</h5>
					<h5 class="rank">Ranking : {{ clan.ranking }}%</h5>
				</div>
			</div>
			<transition name="fly-from-top">
				<div class="clan-members" v-show="clanLoaded" :load="clanLoaded = true">
					<PlayerCard
						class="clan-members-member clan-members-member-4"
						:user="(clan.member_4) ? clan.member_4 : null"
						:name="(clan.member_4) ? clan.member_4.username : 'Member #4'"
						:role="(clan.member_4) ? 'Wind Runner' : 'Mr. Nobody'"
					></PlayerCard>
					<PlayerCard
						class="clan-members-member clan-members-member-2"
						:user="(clan.member_2) ? clan.member_2 : null"
						:name="(clan.member_2) ? clan.member_2.username : 'Member #2'"
						:role="(clan.member_2) ? 'Jack the Ripper' : 'Mr. Nobody'"
					></PlayerCard>
					<PlayerCard
						class="clan-members-member clan-members-member-leader"
						:user="(clan.leader) ? clan.leader : null"
						:name="clan.leader.username"
						role="Masters Blaster"
					></PlayerCard>
					<PlayerCard
						class="clan-members-member clan-members-member-3"
						:user="(clan.member_3) ? clan.member_3 : null"
						:name="(clan.member_3) ? clan.member_3.username : 'Member #3'"
						:role="(clan.member_3) ? 'Carlos the CJ' : 'Mr. Nobody'"
					></PlayerCard>
					<PlayerCard
						class="clan-members-member clan-members-member-5"
						:user="(clan.member_5) ? clan.member_5 : null"
						:name="(clan.member_5) ? clan.member_5.username : 'Member #5'"
						:role="(clan.member_5) ? 'Knight Rider' : 'Mr. Nobody'"
					></PlayerCard>
				</div>
			</transition>
			<invite-clan-member-modal></invite-clan-member-modal>
		</div>
	</div>
</template>

<script>
	import * as functions from '../../js/functions.js'
	import PlayerCard from '../elements/PlayerCard.vue'
	import IconTextModal from '../elements/IconTextModal.vue'
	import CreateClanModal from '../elements/CreateClanModal.vue'
	import ChangeClanIconModal from '../elements/ChangeClanIconModal.vue'
	import InviteClanMemberModal from '../elements/InviteClanMemberModal.vue'
	export default {
		name: 'Clan',
		components: {
			PlayerCard,
			IconTextModal,
			CreateClanModal,
			ChangeClanIconModal,
			InviteClanMemberModal
		},
		data() {
			return {
				clan_invitation: null,
				clan: null,
				noClanLoaded: false,
				clanInvitationLoaded: false,
				clanLoaded: false
			}
		},
		computed: {
			clanMembersCount: function () {
				let count = 1;
				if (this.$data.clan.member_2) { count += 1; }
				if (this.$data.clan.member_3) { count += 1; }
				if (this.$data.clan.member_4) { count += 1; }
				if (this.$data.clan.member_5) { count += 1; }
				return count;
			}
		},
		mounted() {
			this.$data.clan_invitation = this.$store.state.user.clan_invitation;
			this.$data.clan = this.$store.state.clan;
			this.$root.$on('rerender-clan', () => {
				this.$data.clan_invitation = this.$store.state.user.clan_invitation;
				this.$data.clan = this.$store.state.clan;
			});
		},
		methods: {
			acceptClanInvitation: async function () {
				let type = 'acceptClanInvitation';
				functions.serverAxios().patch(`/users/${this.$store.state.user.id}`, {
					type
				})
					.then((response) => {
						functions.updateUserObject(this.$store.state.user.id);
						functions.updateClanObject(this.$data.clan_invitation.id);
					});
			},

			ignoreClanInvitation: async function () {
				let type = null;
				type = 'removeMember';
				let member_id = this.$store.state.user.id;
				functions.serverAxios().patch(`/clans/${this.$data.clan_invitation.id}`, {
					type,
					member_id
				});
				type = 'removeClanInvitation';
				functions.serverAxios().patch(`/users/${this.$store.state.user.id}`, {
					type
				})
					.then( () => {
						functions.updateUserObject(this.$store.state.user.id);
					});
				this.$data.clan_invitation = null;
			}
		}
	}
</script>
