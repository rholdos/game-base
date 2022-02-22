<template>
	<div class="change-clan-icon-modal">
		<b-modal size="xl" hide-footer :id="$props.modalId" title="Change clan icon ..." ref="changeClanIconModal">
			<div class="row">
				<div class="col-lg-8 left">
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
				<div class="col-lg-4 right">
					<h4 class="clan-label">Clan</h4>
					<h1 class="clan-name">{{ clanName }}</h1>
					<img class="big-clan-icon" :src="(clanIcon) ? require('../../icons/clan/' + clanIcon + '.svg') : require('../../icons/clan/clan-0.svg')" alt="Clan icon">
					<button class="button mt-4" @click="changeClanIcon">Change icon</button>
					<button class="button-secondary mt-3 mb-2" @click="cancelModal">Cancel</button>
				</div>
			</div>
		</b-modal>
	</div>
</template>

<script>
	import { globals } from '../../js/globals.js'
	import * as functions from '../../js/functions.js'
	export default {
		name: "ChangeClanIconModal",
		props: ['modalId'],
		data () {
			return {
				clanId: null,
				clanName: null,
				clanIcon: null,
				clanLeader: null,
				clanIcons: []
			}
		},
		beforeMount() {
			for (let i = 1; i <= 63; i++) {
				this.$data.clanIcons.push('clan-' + i);
			}
		},
		mounted() {
			this.$data.clanId = this.$store.state.clan.id;
			this.$data.clanName = this.$store.state.clan.name;
			this.$data.clanIcon = this.$store.state.clan.icon;
		},
		methods: {
			selectClanIcon: async function (event) {
				let $ = globals.$jquery;
				let icon = $(event.currentTarget).attr('class');
				this.$data.clanIcon = icon;
				let bigClanIcon = $(this.$el).find('.big-clan-icon');
				bigClanIcon.addClass('image-flip-animation');
				setTimeout(function () {
					bigClanIcon.removeClass('image-flip-animation');
				}, 500);
			},

			changeClanIcon: async function () {
				this.$store.state.clan.icon = this.$data.clanIcon;
				let type = 'updateIcon';
				let new_icon = this.$data.clanIcon;
				functions.serverAxios().patch(`/clans/${this.$data.clanId}`, {
					type,
					new_icon
				})
					.catch( (error) => {
						console.log('Error in ChangeClanIconModal (method ChangeClanIcon) : ', error);
					});
				this.$refs.changeClanIconModal.hide();
			},

			cancelModal: async function () {
				this.$refs.changeClanIconModal.hide();
			}
		}
	}
</script>
