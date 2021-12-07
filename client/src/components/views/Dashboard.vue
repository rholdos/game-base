
<template>
	<div id="dashboard">
		<div class="row">
			<div class="col-xl-5">
				<transition name="fly-from-left">
					<GameList
						v-show="gameListLoaded" :load="gameListLoaded = true"
						class="orange"
						:games="games"
					></GameList>
				</transition>
			</div>
			<div class="col-xl-7">
				<transition name="fly-from-right">
					<WishList
						v-show="wishListLoaded" :load="wishListLoaded = true"
						class="green"
						:wishes="wishes"
					></WishList>
				</transition>
				<div class="row">
					<div class="col-md-6">
						<transition name="fly-from-bottom">
							<GamePlayCard
								v-show="gamePlayCardLoaded" :load="gamePlayCardLoaded = true"
							></GamePlayCard>
						</transition>
					</div>
					<div class="col-md-6">
						<transition name="fly-from-bottom">
							<ClanCard
								v-show="clanCardLoaded" :load="clanCardLoaded = true"
							></ClanCard>
						</transition>
					</div>
				</div>
			</div>
		</div>
		<buy-game-modal></buy-game-modal>
	</div>
</template>

<script>
	import * as functions from '../../js/functions.js'
	import GameList from '../elements/GameList.vue'
	import WishList from '../elements/WishList.vue'
	import GamePlayCard from '../elements/GamePlayCard.vue'
	import ClanCard from '../elements/ClanCard.vue'
	import BuyGameModal from '../elements/BuyGameModal.vue'
	export default {
		name: 'Dashboard',
		components: {
			GameList,
			WishList,
			GamePlayCard,
			ClanCard,
			BuyGameModal
		},
		data () {
			return {
				games: null,
				wishes: null,
				gameListLoaded: false,
				wishListLoaded: false,
				gamePlayCardLoaded: false,
				clanCardLoaded: false
			}
		},
		mounted() {
			this.getGames();
			this.getWishes();
			this.$root.$on('remove-wish', (id) => {
				functions.serverAxios().delete(`/wishes/${id}`)
					.then( () => {
						this.getWishes();
					});
			});
			this.$root.$on('wish-game', (game) => {
				functions.serverAxios().post('/wishes', {
					wish_id: game.id,
					title: game.name
				});
			});
			this.$root.$on('buy-game', (game) => {
				functions.serverAxios().delete(`/wishes/${game.id}`)
					.then( () => {
						this.getWishes();
					});
				functions.serverAxios().post('/games', {
					game_id: game.id,
					title: game.name
				})
					.then( () => {
						this.getGames();
					});
			});
		},
		methods: {
			getGames: async function () {
				functions.serverAxios().get('/games')
					.then( (response) => {
						this.$data.games = response.data;
					});
			},

			getWishes: async function () {
				functions.serverAxios().get('/wishes')
					.then( (response) => {
						this.$data.wishes = response.data;
					});
			}
		}
	}
</script>
