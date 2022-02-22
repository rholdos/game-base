<template>
	<transition name="fly-from-top">
		<div class="col-sm-6 col-xl-4 col-hd-3" v-show="loaded" :load="loaded = true">
			<div class="small-game-card" :style="{ backgroundImage: 'url(' + this.$props.game.cover + ')' }">
				<div class="small-game-card-cover-before"></div>
				<div class="small-game-card-cover-after"></div>
				<div class="card-content">
					<div class="card-heading">
						<div class="name">
							<h3>{{ this.$props.game.name }}</h3>
						</div>
						<h4 class="release">{{ this.$props.game.first_release_date }}, {{ this.$props.game.company }}</h4>
						<h4 class="genre">{{ this.$props.game.genres }}</h4>
					</div>
					<div class="card-body">
						<p>{{ this.$props.game.summary }}</p>
					</div>
					<div class="card-icons">
						<a :href=(this.$props.game.url)>
							<div>
								<img src="../../icons/website.svg" alt="Website">
								<span>Website</span>
							</div>
						</a>
						<a @click.prevent="$root.$emit('open-wish-game-modal', $props.game)">
							<div>
								<img src="../../icons/wishlist.svg" alt="Wishlist">
								<span>Wishlist</span>
							</div>
						</a>
						<a @click="$root.$emit('open-buy-game-modal', $props.game)">
							<div>
								<img src="../../icons/cart.svg" alt="Cart">
								<span>Purchase</span>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
	import { globals } from '../../js/globals.js';
	export default {
		name: 'SmallGameCard',
		props: ['game'],
		data() {
			return {
				loaded: false
			}
		},
		beforeMount() { this.addVibrantColors(this.$props.game.cover); },
		methods: {
			addVibrantColors: function (cover) {
				let vibrant = new globals.$vibrant(globals.$cors + cover);
				vibrant.getPalette().then(palette => {
					let $ = globals.$jquery;
					$(this.$el).find('.small-game-card-cover-after').css('background', 'linear-gradient(0deg, ' + palette.DarkVibrant.getHex() + ' 50%, transparent 100%)');
					$(this.$el).find('.card-heading').css('color', palette.LightVibrant.getHex());
					$(this.$el).find('.card-icons').css('color', palette.LightVibrant.getHex());
				});
			}
		}
	}
</script>
