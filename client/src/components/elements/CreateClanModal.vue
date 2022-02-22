<template>
	<div class="create-clan-modal">
		<b-modal size="xl" hide-footer id="createClanModal" title="Create a new clan ..." ref="createClanModal">
			<div class="row">
				<div class="col-lg-8 left">
					<h2 class="title mt-2 mb-3">New clan informations</h2>
					<div class="new-clan-name-input">
						<div class="input-group mb-3 col-lg-10 mx-auto">
							<div class="input-group-prepend">
								<span class="input-group-text">Clan Name</span>
							</div>
							<input type="text" class="form-control" v-model="newClanName" autofocus required>
						</div>
					</div>
					<div class="new-clan-icon">
						<h4 class="my-2">Choose icon of your new clan</h4>
						<div class="icons-gallery">
							<img
								v-for="(icon, index) in clanIcons"
								:key="index"
								:class="icon"
								:src="(icon) ? require('../../icons/clan/' + icon + '.svg') : ''"
								alt="Clan icon"
								@click="selectClanIcon($event)"
							></img>
						</div>
					</div>
				</div>
				<div class="col-lg-4 right">
					<h4 class="clan-label">Clan</h4>
					<h1 class="clan-name">{{ newClanName }}</h1>
					<img class="big-clan-icon" :src="(newClanIcon) ? require('../../icons/clan/' + newClanIcon + '.svg') : require('../../icons/clan/clan-0.svg')" alt="Clan icon">
					<button class="button mt-3" @click="createClan" v-b-modal.createClanConfirmModal>Create this clan</button>
					<icon-text-modal
						modal-id="createClanConfirmModal"
						title="Create new clan ..."
						:icon="(success) ? require('../../icons/success.svg') : require('../../icons/fail.svg')"
						:text="(success) ? 'Your new clan has been successfully created !' : 'An error has occured trying to create this clan !'"
					></icon-text-modal>
				</div>
			</div>
		</b-modal>
	</div>
</template>

<script>
	import { globals } from '../../js/globals.js'
	import * as functions from '../../js/functions.js'
	import IconTextModal from '../elements/IconTextModal.vue'
	export default {
		name: "CreateClanModal",
		components: {
			IconTextModal
		},
		data () {
			return {
				newClanName: null,
				newClanIcon: null,
				clanIcons: [],
				success: false
			}
		},
		beforeMount() {
			for (let i = 1; i <= 32; i++) {
				this.$data.clanIcons.push('clan-' + i);
			}
		},
		methods: {
			selectClanIcon: async function (event) {
				let $ = globals.$jquery;
				let icon = $(event.currentTarget).attr('class');
				this.$data.newClanIcon = icon;
				let bigAvatar = $(this.$el).find('.big-clan-icon');
				bigAvatar.addClass('image-flip-animation');
				setTimeout(function () {
					bigAvatar.removeClass('image-flip-animation');
				}, 500);
			},

			createClan: async function () {
				functions.serverAxios().post('/clans', {
					name: this.$data.newClanName,
					icon: this.$data.newClanIcon,
				})
					.then( (response) => {
						this.$data.success = true;
						functions.updateUserObject(this.$store.state.user.id);
						functions.updateClanObject(response.data);
					})
					.catch( (error) => {
						this.$data.success = false;
						console.log('CreateClanModal (method createClan) - error: ', error);
					});
			}
		}
	}
</script>
