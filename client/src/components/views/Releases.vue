
<template>
	<div id="releases">
		<div class="row my-5 justify-content-center" id="loader" style="display: none">
			<SmallLoader
				text="Preparing Releases"
			></SmallLoader>
		</div>
		<div class="row">
			<transition name="fly-from-left">
				<div class="col-lg-6" v-show="leftLoaded" :load="leftLoaded = true">
					<transition name="fly-from-top">
						<Timeline
							v-show="(leftLoaded && leftTimelineLoaded)" :load="leftTimelineLoaded = true"
							title="Recent releases"
							class="red"
							:releases="recentReleases"
						></Timeline>
					</transition>
				</div>
			</transition>
			<transition name="fly-from-right">
				<div class="col-lg-6" v-show="rightLoaded" :load="rightLoaded = true">
					<transition name="fly-from-top">
						<Timeline
							v-show="(rightLoaded && rightTimelineLoaded)" :load="rightTimelineLoaded = true"
							title="Coming Soon"
							class="blue"
							:releases="comingSoon"
						></Timeline>
					</transition>
				</div>
			</transition>
		</div>
	</div>
</template>

<script>
	import { globals } from '../../js/globals.js';
	import SmallLoader from '../elements/SmallLoader.vue'
	import Timeline from '../elements/Timeline.vue';
	import BigGameCard from '../elements/BigGameCard';
	export default {
		name: 'Releases',
		components: {
			SmallLoader,
			Timeline,
			BigGameCard
		},
		data () {
			return {
				recentReleasesQuery: 'where first_release_date < ' + Date.now().toString().slice(0,10) + '&' + 'first_release_date > ' + (Number(Date.now().toString().slice(0,10)) - 2592000).toString() + ';',
				comingSoonQuery: 'where first_release_date > ' + Date.now().toString().slice(0,10) + '&' + 'first_release_date < ' + (Number(Date.now().toString().slice(0,10)) + 2592000).toString() + ';',
				rawGames: [],
				recentReleases: [],
				comingSoon: [],
				leftLoaded: false,
				rightLoaded: false,
				leftTimelineLoaded: false,
				rightTimelineLoaded: false
			}
		},
		mounted: function() {
			this.getGamesFromApi(this.recentReleasesQuery, 'recentReleases');
			this.getGamesFromApi(this.comingSoonQuery, 'comingSoon');
		},
		methods: {
			hideLoader: async function () {
				globals.$jquery(this.$el).find('#loader').fadeOut(250);
			},

			showLoader: async function () {
				globals.$jquery(this.$el).find('#loader').fadeIn(500);
			},

			getGamesFromApi: async function (query, store) {
				this.showLoader();
				this.fetchGames(query).then( () => {
					this.prepareGames(this.rawGames, store).then( () => {
						this.hideLoader();
					});
				});
			},

			fetchGames: async function (query) {
				await globals.$axios({
					url: globals.$apiUrl + "/games",
					method: 'POST',
					headers: {
						'Accept': 'application/json',
						'user-key': globals.$apiKey
					},
					data: 'fields name, first_release_date, involved_companies, genres, summary, cover, url; ' + query + 'limit 5;',
				})
					.then(response => {
						this.rawGames = response.data.filter(function(game) {
							return (
								game.name &&
								game.first_release_date &&
								game.involved_companies &&
								game.genres &&
								game.summary &&
								game.cover &&
								game.url
							);
						});
					})
					.catch(error => {
						console.log('Releases - axios error - ', error);
					});
			},

			prepareGames: async function (games, store) {
				games.forEach(async (game) => {
					await this.formatDate(game);
					await this.prepareCompany(game);
					await this.prepareGenres(game);
					await this.prepareCover(game).then( () => {
						if (store == 'recentReleases') {
							this.recentReleases.push(game);
						} else if (store == 'comingSoon') {
							this.comingSoon.push(game);
						}
					});
				});
			},

			formatDate: async function (game) {
				let date = (new Date(game.first_release_date * 1000));
				game.first_release_date = date.toDateString().slice(4);
			},

			prepareCompany: async function (game) {
				let $companies = game.involved_companies.toString();
				return globals.$axios({
					url: globals.$apiUrl + "/involved_companies",
					method: 'POST',
					headers: {
						'Accept': 'application/json',
						'user-key': globals.$apiKey
					},
					data: 'fields company; where id = (' + $companies + ');'
				}).then(response => {
					let $company = response.data[0].company;
					return globals.$axios({
						url: globals.$apiUrl + "/companies",
						method: 'POST',
						headers: {
							'Accept': 'application/json',
							'user-key': globals.$apiKey
						},
						data: 'fields name; where id = (' + $company + ');'
					}).then(response => {
						game.company = response.data[0].name;
					});
				});
			},

			prepareGenres: async function (game) {
				let $genres = game.genres.toString();
				return globals.$axios({
					url: globals.$apiUrl + "/genres",
					method: 'POST',
					headers: {
						'Accept': 'application/json',
						'user-key': globals.$apiKey
					},
					data: 'fields name; where id = (' + $genres + ');'
				}).then(response => {
					let gameGenres = '';
					response.data.forEach(function (element) {
						gameGenres += element.name + ' ';
						game.genres = gameGenres;
					});
				});
			},

			prepareCover: async function (game) {
				return globals.$axios({
					url: globals.$apiUrl + "/covers",
					method: 'POST',
					headers: {
						'Accept': 'application/json',
						'user-key': globals.$apiKey
					},
					data: 'fields url; where id = (' + game.cover + ');'
				}).then(response => {
					game.cover = 'https:' + response.data[0].url.replace('t_thumb' , 't_cover_big');
				});
			}
		}
	}
</script>
