<template>
	<div class="buy-game-modal">
		<b-modal hide-footer id="buyGameModal" title="Buy this game ..." ref="buyGameModal">
			<div class="body">
				<div class="icon">
					<img :src="require('../../icons/shop.svg')" alt="Modal Icon">
				</div>
				<div class="text">
					<h4>Do you really want to buy this game ?</h4>
					<h5>{{ (game) ? game.title : '' }}</h5>
				</div>
			</div>
			<div class="buttons">
				<button class="button-secondary" @click="$refs.buyGameModal.hide()">Cancel</button>
				<button class="button ml-2" @click="buyGame">Buy game</button>
			</div>
		</b-modal>
	</div>
</template>

<script>
	export default {
		name: "BuyGameModal",
		data() {
			return {
				game: null
			}
		},
		mounted() {
			this.$root.$on('open-buy-game-modal', (game) => {
				this.$data.game = game;
				this.$refs.buyGameModal.show();
			});
		},
		methods: {
			buyGame: async function () {
				this.$root.$emit('buy-game', this.$data.game);
				this.$refs.buyGameModal.hide();
			}
		}
	}
</script>
