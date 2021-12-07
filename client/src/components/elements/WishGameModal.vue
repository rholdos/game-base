
<template>
	<div class="wish-game-modal buy-game-modal">
		<b-modal hide-footer id="wishGameModal" title="Wish this game ..." ref="wishGameModal">
			<div class="body">
				<div class="icon">
					<img :src="require('../../icons/wishlist.svg')" alt="Modal Icon">
				</div>
				<div class="text">
					<h4>Do you really want to add this game to your wishlist ?</h4>
					<h5>{{ (game) ? game.title : '' }}</h5>
				</div>
			</div>
			<div class="buttons">
				<button class="button-secondary" @click="$refs.wishGameModal.hide()">Cancel</button>
				<button class="button ml-2" @click="wishGame">Yes</button>
			</div>
		</b-modal>
	</div>
</template>

<script>
	export default {
		name: "WishGameModal",
		data() {
			return {
				game: null
			}
		},
		mounted() {
			this.$root.$on('open-wish-game-modal', (game) => {
				this.$data.game = game;
				this.$refs.wishGameModal.show();
			});
		},
		methods: {
			wishGame: async function () {
				this.$root.$emit('wish-game', this.$data.game);
				this.$refs.wishGameModal.hide();
			}
		}
	}
</script>
