<template>
	<div class="invite-clan-member-modal">
		<b-modal ref="inviteClanMemberModal" title="Invite new clan member ..." hide-footer>
			<div class="first-row">
				<div class="icon">
					<img :src="require('../../icons/add_member.svg')" alt="Modal Icon">
				</div>
				<div class="text" v-if="!this.$store.getters.isClanLeader">
					<h4 class="my-3">Only clan leader can invite more members to this clan</h4>
				</div>
				<div class="text" v-if="this.$store.getters.isClanLeader">
					<label for="new-member-name">New member's name</label>
					<div class="input-group">
						<input type="text" class="form-control" id="new-member-name" v-model="newMemberName">
					</div>
					<h6 class="error-alert" v-if="error">{{ error }}</h6>
				</div>
			</div>
			<div class="second-row">
				<div class="buttons" v-if="this.$store.getters.isClanLeader">
					<button class="button-secondary mt-3 cancel-button">Cancel</button>
					<button class="button mt-3 invite-button">Invite</button>
				</div>
			</div>
		</b-modal>
	</div>
</template>

<script>
	import { globals } from '../../js/globals.js'
	import * as functions from '../../js/functions.js'
	export default {
		name: "InviteClanMemberModal",
		data() {
			return {
				clanMembersNames: [],
				newMemberName: null,
				error: null
			}
		},
		mounted() {
			let $context = globals.$jquery(this.$el);
			this.fetchClanMembersNames();
			this.$root.$on('invite-clan-member-open-modal', () => {
				this.$refs.inviteClanMemberModal.show();
			});
			$context.find('.invite-button').click( () => {
				if (this.$data.newMemberName) {
					if (this.$data.clanMembersNames.indexOf(this.$data.newMemberName) == -1 ) {
						this.inviteNewMember();
					} else {
						$context.find('input#new-member-name').addClass('invalid-input').focus();
						$context.find('.first-row').animate({height: '155' }, 250, () => {
							this.$data.error = `This user is already your clan member !`;
						});
					}
				} else {
					$context.find('input#new-member-name').addClass('invalid-input').focus();
					$context.find('.first-row').animate({height: '155' }, 250, () => {
						this.$data.error = `You didn't type anything :(`;
					});
				}
			});
			$context.find('.cancel-button').click( () => {
				this.$refs.inviteClanMemberModal.hide();
				this.$data.newMemberName = null;
			});
		},
		methods: {
			fetchClanMembersNames: async function () {
				if (this.$store.state.clan.leader) { this.$data.clanMembersNames.push(this.$store.state.clan.leader.username); }
				if (this.$store.state.clan.member_2) { this.$data.clanMembersNames.push(this.$store.state.clan.member_2.username); }
				if (this.$store.state.clan.member_3) { this.$data.clanMembersNames.push(this.$store.state.clan.member_3.username); }
				if (this.$store.state.clan.member_4) { this.$data.clanMembersNames.push(this.$store.state.clan.member_4.username); }
				if (this.$store.state.clan.member_5) { this.$data.clanMembersNames.push(this.$store.state.clan.member_5.username); }
			},
			inviteNewMember: async function () {
				let type = 'addMember';
				let new_member_name = this.$data.newMemberName;
				functions.serverAxios().patch(`/clans/${this.$store.state.user.clan_id}`, {
					type,
					new_member_name
				})
					.then( (response) => {
						if (typeof response.data == 'number') {
							functions.updateClanObject(response.data);
							this.$refs.inviteClanMemberModal.hide();
							this.$data.newMemberName = null;
							setTimeout( () => {
								this.$root.$emit('rerender-clan');
							}, 150);
						} else {
							let error = null;
							if (response.data == 'member_not_registered') { error = 'This user is not registered in GameBase system !'; }
							if (response.data == 'member_has_invitation') { error = `This user is already invited to another clan !`; }
							if (response.data == 'member_in_clan') { error = `This user is already member of another clan !`; }
							globals.$jquery(this.$el).find('input#new-member-name').addClass('invalid-input').focus();
							globals.$jquery(this.$el).find('.first-row').animate({ height: '155' }, 250, () => {
								this.$data.error = error;
							});
						}
					})
					.catch( (error) => {
						globals.$jquery(this.$el).find('input#new-member-name').addClass('invalid-input').focus();
						globals.$jquery(this.$el).find('.first-row').animate({ height: '155' }, 250, () => {
							this.$data.error = 'An error has occured trying to invite new clan member !';
						});
					});
			}
		}
	}
</script>
