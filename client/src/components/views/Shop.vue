<template>
	<div id="shop">
		<b-tabs class="b-tabs mt-3">
			<b-tab class="search-tab" title="Search games" @click="clearGames">
				<div class="container">
					<div class="row">
						<div class="col-12 col-sm-9 col-xl-7 mx-auto mt-5 mb-2">
							<div class="input-group">
								<div class="input-group-prepend">
									<span class="input-group-text">Game Name</span>
								</div>
								<input type="text" class="form-control" id="name-input" v-model="search" @keyup.enter="searchGames()">
							</div>
						</div>
					</div>
				</div>
				<div class="row my-5">
					<div class=" w-100 text-center">
						<div class="button" :class="{ 'button-disabled' : !search }" @click="searchGames">Search</div>
					</div>
				</div>
			</b-tab>
			<b-tab class="filter-tab" title="Filter games" @click="clearGames">
				<div class="container">
					<div class="row">
						<div class="col-12 col-sm-9 col-xl-7 mx-auto mt-5 mb-2">
							<div class="input-group">
								<div class="input-group-prepend">
									<span class="input-group-text">Genre</span>
								</div>
								<select class="custom-select" v-model="genre" >
									<option selected value="all">All Genres</option>
									<option value="2">Point and Click</option>
									<option value="4">Fighting</option>
									<option value="5">Shooter</option>
									<option value="7">Music</option>
									<option value="8">Platform</option>
									<option value="9">Puzzle</option>
									<option value="10">Racing</option>
									<option value="11">Real Time Strategy (RTS)</option>
									<option value="12">Role - playing (RPG)</option>
									<option value="13">Simulator</option>
									<option value="14">Sport</option>
									<option value="15">Strategy</option>
									<option value="16">Turn-based strategy (TBS)</option>
									<option value="24">Tactical</option>
									<option value="25">Hack and Slash / Beat 'em Up</option>
									<option value="26">Quiz / Trivia</option>
									<option value="30">Pinball</option>
									<option value="31">Adventure</option>
									<option value="32">Indie</option>
									<option value="33">Arcade</option>
								</select>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-12 col-xl-9 mx-auto my-2">
							<div class="row">
								<div class="col-12 col-sm-9 col-md-4 mx-auto my-2">
									<div class="input-group">
										<div class="input-group-prepend">
											<span class="input-group-text">Year</span>
										</div>
										<select class="custom-select" v-model="year">
											<option selected value="all">All</option>
											<option value="0">2019</option>
											<option value="1">2018</option>
											<option value="2">2017</option>
											<option value="3">2016</option>
											<option value="4">2015</option>
										</select>
									</div>
								</div>
								<div class="col-12 col-sm-9 col-md-4 mx-auto my-2">
									<div class="input-group">
										<div class="input-group-prepend">
											<span class="input-group-text">Month</span>
										</div>
										<select class="custom-select" v-model="month" :disabled="(year === 'all')">
											<option selected value="all">All</option>
											<option value="1">January</option>
											<option value="2">February</option>
											<option value="3">March</option>
											<option value="4">April</option>
											<option value="5">May</option>
											<option value="6">Jun</option>
											<option value="7">July</option>
											<option value="8">August</option>
											<option value="9">September</option>
											<option value="10">October</option>
											<option value="11">November</option>
											<option value="12">December</option>
										</select>
									</div>
								</div>
								<div class="col-12 col-sm-9 col-md-4 mx-auto my-2">
									<div class="input-group">
										<div class="input-group-prepend">
											<span class="input-group-text">Sort</span>
										</div>
										<select class="custom-select" v-model="sort">
											<option value="nosort" selected>No Sort</option>
											<option value="desc">New first</option>
											<option value="asc">Old first</option>
										</select>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-12 col-sm-9 col-xl-6 mx-auto my-2">
							<div class="row h-45px">
								<div class="col-4 col-md-3">
									<div class="form-check d-flex flex-column justify-content-center">
										<input class="form-check-input" type="checkbox" v-model="popularityCheck" id="popularity-check">
										<label class="form-check-label" for="popularity-check">
											Filter by Popularity
										</label>
									</div>
								</div>
								<transition name="fly-from-right">
									<div class="col-8 col-md-9" v-show="popularityCheck">
										<input v-model.number="popularityValue" type="range" id="popularity-value" min="0" max="100" step="5">
										<label class="d-block text-center" for="popularity-value">Popularity &nbsp; > &nbsp; {{popularityValue}}</label>
									</div>
								</transition>
							</div>
						</div>
					</div>
					<div class="row my-5">
						<div class=" w-100 text-center">
							<div class="button" @click="filterGames">Filter</div>
						</div>
					</div>
				</div>
			</b-tab>
		</b-tabs>
		<div class="hr-with-arrow-down"></div>
		<div class="row my-5 justify-content-center" id="loader" style="display: none">
			<SmallLoader
				text="Searching Database"
			></SmallLoader>
		</div>
		<div class="row my-5" id="no-result" style="display: none">
			<img class="no-result-icon" src="../../icons/no-results.svg" alt="No result icon">
			<h6 class="no-result-text">No results found</h6>
		</div>
		<div class="row my-5 search-results" v-if="searchResults">
			<SmallGameCard
				v-for="(game, index) in readyGames"
				:key="index"
				:game="game"
			></SmallGameCard>
		</div>
		<div class="row my-5 filter-results" v-if="filterResults">
			<SmallGameCard
				v-for="(game, index) in readyGames"
				:key="index"
				:game="game"
			></SmallGameCard>
		</div>
		<buy-game-modal></buy-game-modal>
		<wish-game-modal></wish-game-modal>
	</div>
</template>

<script>
	import { globals } from '../../js/globals.js'
	import SmallLoader from '../elements/SmallLoader.vue'
	import SmallGameCard from '../elements/SmallGameCard.vue'
	import BuyGameModal from '../elements/BuyGameModal.vue'
	import WishGameModal from '../elements/WishGameModal.vue'
	export default {
		name: 'Shop',
		components: {
			SmallLoader,
			SmallGameCard,
			BuyGameModal,
			WishGameModal
		},
		data () {
			return {
				search: null,
				genre: null,
				year: null,
				month: null,
				sort: null,
				popularityCheck: false,
				popularityValue: 75,
				searchResults: false,
				filterResults: false,
				rawGames: [],
				readyGames: []
			}
		},
		methods: {
			hideLoader: async function () {
				let $context = globals.$jquery(this.$el);
				$context.find('#loader').fadeOut(250, () => {
					if (this.rawGames.length === 0) {
						$context.find('#no-result').fadeIn(500);
					}
				});
			},

			showLoader: async function () {
				let $context = globals.$jquery(this.$el);
				$context.find('#no-result').fadeOut(250, function () {
					$context.find('#loader').fadeIn(500);
				});
			},

			clearGames: async function() {
				globals.$jquery(this.$el).find('#no-result').hide();
				this.rawGames = [];
				this.readyGames = [];
			},

			searchGames: async function () {
				this.filterResults = false;
				this.searchResults = true;
				let searchQuery = 'search "' + this.search + '";';
				this.getGamesFromApi(searchQuery);
			},

			filterGames: async function () {
				this.searchResults = false;
				this.filterResults = true;

				let currentDate = Number(Date.now().toString().slice(0,10));
				let timebase = 1546300800; // 1.1.2019 00:00:00
				let year = 31536000; // 1 year = 31536000
				let prevDays = 0;
				let days = 0;
				let filterQuery = 'where ';

				// Sort by release Date by Year and Month selected --- must be first
				if (this.year && this.year !== 'all') {
					if (this.year === '0') {
						filterQuery += 'first_release_date > ' + timebase + ' & first_release_date < ' + currentDate + ' & ';
						timebase = 1546300800;
					} else {
						filterQuery += 'first_release_date > ' + (timebase - (year * this.year)) + ' & first_release_date < ' + (timebase - (year * (this.year - 1))) + ' & ';
						timebase = 1546300800 - (year * this.year);
					}
					if (this.month && this.month !== 'all') {
						switch(this.month) {
							case '1':
								prevDays = 0;
								days = 2678400;
								break;
							case '2':
								prevDays = 2678400;
								days = 5097600;
								break;
							case '3':
								prevDays = 5097600;
								days = 7776000;
								break;
							case '4':
								prevDays = 7776000;
								days = 10368000;
								break;
							case '5':
								prevDays = 10368000;
								days = 13046400;
								break;
							case '6':
								prevDays = 13046400;
								days = 15638400;
								break;
							case '7':
								prevDays = 15638400;
								days = 18316800;
								break;
							case '8':
								prevDays = 18316800;
								days = 20995200;
								break;
							case '9':
								prevDays = 20995200;
								days = 23587200;
								break;
							case '10':
								prevDays = 23587200;
								days = 26265600;
								break;
							case '11':
								prevDays = 26265600;
								days = 28857600;
								break;
							case '12':
								prevDays = 28857600;
								days = 31536000;
								break;
							default:
								prevDays = 0;
								days = 0;
								break;
						}
						filterQuery += 'first_release_date > ' + (timebase + prevDays) + ' & first_release_date < ' + (timebase + days) + ' & ';
					}
				}

				// Sort by genres selected
				if (this.genre && this.genre !== 'all') { filterQuery += 'genres = (' + this.genre +') & '; }

				// Sort by minimal popularity
				if (this.popularityCheck) { filterQuery += 'popularity > ' + this.popularityValue + ' & '; }

				filterQuery = filterQuery.slice(0,-3);
				filterQuery += ';';

				// Sort ASC od DESC by release date
				if (this.sort && this.sort !== 'nosort') { filterQuery += 'sort first_release_date ' + this.sort + ';'; }

				this.getGamesFromApi(filterQuery);
			},

			getGamesFromApi: async function (query) {
				this.clearGames();
				this.showLoader();
				this.fetchGames(query).then( () => {
					this.prepareGames(this.rawGames).then( () => {
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
						data: 'fields name, first_release_date, involved_companies, genres, summary, cover, url, popularity;' + query + ';',
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
						console.log('Shop - axios error - ', error);
					});
			},

			prepareGames: async function (games) {
				games.forEach(async (game) => {
					await this.formatDate(game);
					await this.prepareCompany(game);
					await this.prepareGenres(game);
					await this.prepareCover(game).then( () => {
						this.readyGames.push(game);
					});
				});
			},

			formatDate: async function (game) {
				let date = (new Date(game.first_release_date * 1000));
				game.first_release_date = date.toDateString().slice(4, date.toDateString().length);
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
