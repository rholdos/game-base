
<template>
	<div class="row wish-list">
		<div class="col-lg-6 wish-list-left">
			<div class="wish-list-left-heading">
				<span class="wish-list-left-heading-border"></span>
				<h4>Your Wish List</h4>
				<p>Buy those games and play</p>
			</div>
			<div class="wish-list-left-body">
				<ul class="wish-list-left-body-list list-unstyled">
					<div class="no-wishes" v-if="($props.wishes && $props.wishes.length == 0)">
						<img src="../../icons/box.svg" alt="Empty box icon">
						<h5>Your wish list is empty</h5>
					</div>
					<div v-if="($props.wishes && $props.wishes.length > 0)">
						<li class="wish-list-left-body-list-item" v-for="wish in this.$props.wishes">
							<div class="wish-list-left-body-list-item-icons icons">
								<button @click="$root.$emit('open-buy-game-modal', wish)">
									<img src="../../icons/cart.svg" alt="Buy icon">
								</button>
								<button @click="$root.$emit('remove-wish', wish.id)">
									<img class="ml-3" src="../../icons/delete.svg" alt="Delete icon">
								</button>
							</div>
							<div class="wish-list-left-body-list-item-text">
								<div class="title">{{ wish.title }}</div>
								<div class="date">Added: {{ wish.wish_date }}</div>
							</div>
						</li>
					</div>
				</ul>
			</div>
		</div>
		<div class="col-lg-6 wish-list-right d-none d-lg-flex">
			<img src="../../icons/wishlist.svg" alt="Wishlist Icon">
			<button class="button wish-list-right-button" @click="toShop">Get more games ...</button>
		</div>
	</div>
</template>

<script>
	import * as functions from '../../js/functions.js'
	export default {
		name: 'WishList',
		props: ['wishes'],
		methods: {
			toShop: function () {
				functions.redirect('/shop');
			}
		}
	}
</script>
