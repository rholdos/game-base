
<template>
	<div class="big-game-card" :style="{ backgroundImage: 'url(' + this.$props.game.cover + ')' }">
		<div class="big-game-card-cover-after"></div>
		<div class="card-content">
			<div class="card-heading">
				<div class="row">
					<div class="small-cover" :style="{ backgroundImage: 'url(' + this.$props.game.cover + ')' }"></div>
					<div class="text">
						<div class="name">
							<h3>{{ this.$props.game.name }}</h3>
						</div>
						<h4 class="release">{{ this.$props.game.first_release_date }}, {{ this.$props.game.company }}</h4>
						<h4 class="genre">{{ this.$props.game.genres }}</h4>
					</div>
				</div>
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
				<a href="">
					<div>
						<img src="../../icons/wishlist.svg" alt="Wishlist">
						<span>Add to wishlist</span>
					</div>
				</a>
				<a href="">
					<div>
						<img src="../../icons/cart.svg" alt="Cart">
						<span>Purchase</span>
					</div>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
	import { globals } from '../../js/globals.js';
	export default {
		name: 'BigGameCard',
		props: ['game'],
		beforeMount() { this.addVibrantColors(this.$props.game.cover); },
		methods: {
			addVibrantColors: function (cover) {
				let vibrant = new globals.$vibrant(globals.$cors + cover);
				vibrant.getPalette().then(palette => {
					let $ = globals.$jquery;
					$(this.$el).find('.big-game-card-cover-after').css('background', 'linear-gradient(90deg, ' + palette.DarkVibrant.getHex() + ' 55%, transparent 100%)');
					$(this.$el).find('.card-heading').css('color', palette.LightVibrant.getHex());
					$(this.$el).find('.card-icons').css('color', palette.LightVibrant.getHex());
				});
			}
		}
	}
</script>
