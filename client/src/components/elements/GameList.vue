
<template>
	<div class="game-list">
		<div class="game-list-heading">
			<h4>Your Games</h4>
		</div>
		<span class="game-list-heading-border"></span>
		<div class="game-list-body">
			<div class="no-games" v-if="($props.games && $props.games.length == 0)">
				<img src="../../icons/box.svg" alt="Empty box icon">
				<h5>Your game list is empty</h5>
			</div>
			<div v-if="($props.games && $props.games.length > 0)">
				<ul class="list-unstyled">
					<button class="game-list-body-item" v-for="game in $props.games" v-b-modal.playGameModal>
						<div class="game-list-body-item-icon before">
							<img src="../../icons/controller.svg" alt="Controller icon">
							<p>Play</p>
						</div>
						<div class="game-list-body-item-text">
							<div class="title">{{ game.title }}</div>
							<div class="date">Purchased: {{ game.purchase_date }}</div>
						</div>
						<div class="game-list-body-item-icon after">
							<img src="../../icons/controller.svg" alt="Controller icon">
							<p>Play</p>
						</div>
					</button>
				</ul>
			</div>
		</div>
		<div class="game-list-footing">
			<button class="button game-list-footing-button" @click="toShop">Buy more games ...</button>
		</div>
		<icon-text-modal
			modal-id="playGameModal"
			title="Play game ..."
			:icon="require('../../icons/controller.svg')"
			text="Launching game ..."
		></icon-text-modal>
	</div>
</template>

<script>
	import * as functions from '../../js/functions.js'
	import IconTextModal from './IconTextModal.vue'
	export default {
		name: 'GameList',
		components: {
			IconTextModal
		},
		props: ['games'],
		methods: {
			toShop: function () {
				functions.redirect('/shop');
			}
		}
	}
</script>
