
<template>
	<div class="game-play-card">
		<div class="game-play-card-icon">
			<img src="../../icons/gameplay.svg" alt="Gameplay icon">
		</div>
		<div class="game-play-card-text">
			<h2>{{ this.formatGameplay }}</h2>
			<h6>Gameplay</h6>
		</div>
		<div class="game-play-card-footing">
			<h5>Keep on playing !</h5>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'GamePlayCard',
		computed: {
			formatGameplay: function () {
				let minutes = (Math.floor(this.$store.state.user.gameplay / 60)).toString();
				let seconds = this.$store.state.user.gameplay - minutes * 60;
				return minutes + ' min ' + seconds + ' sec';
			}
		}
	}
</script>
