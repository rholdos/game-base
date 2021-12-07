
<template>
	<div id="credits">
		<div class="row h-100">
			<transition name="flip">
				<div class="col-sm-12 col-md-5 h-100 left" v-show="loaded" :load="loaded = true">
					<h6 class="project">project</h6>
					<h1 class="title">GameBase</h1>
					<div class="row line-row">
						<div class="line"></div>
						<div class="icon">
							<img src="../../icons/dashboard.svg" alt="Dashboard icon">
						</div>
						<div class="line"></div>
					</div>
					<h6 class="copyright">© All Rights Reserved</h6>
				</div>
			</transition>
			<div class="col-sm-12 col-md-7 h-100 right">
				<div class="scroll-content">
					<h4>Roman Holdos</h4>
					<h6>presents</h6>
					<br>
					<hr>
					<h1 class="px-5">GameBase</h1>
					<h6>as final bachelor's degree project</h6>
					<hr>
					<br>
					<br>
					<br>
					<h5 class="subtitle">technologies used</h5>
					<div class="row">
						<div class="col-sm-6">
							<div class="technology">
								<div class="logo">
									<img src="../../icons/brands/node-js.svg" alt="Node JS logo">
								</div>
								<div class="text">
									<h5>Node JS</h5>
									<h5>JavaScript runtime built</h5>
								</div>
							</div>
						</div>
						<div class="col-sm-6">
							<div class="technology">
								<div class="logo">
									<img src="../../icons/brands/vue-js.svg" alt="Vue JS logo">
								</div>
								<div class="text">
									<h5>Vue JS</h5>
									<h5>Reactive javascript framework</h5>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-6">
							<div class="technology">
								<div class="logo">
									<img src="../../icons/brands/adonis-js.svg" alt="Adonis JS logo">
								</div>
								<div class="text">
									<h5>Adonis JS</h5>
									<h5>Node.js based web framework</h5>
								</div>
							</div>
						</div>
						<div class="col-sm-6">
							<div class="technology">
								<div class="logo">
									<img src="../../icons/brands/webpack.svg" alt="Webpack logo">
								</div>
								<div class="text">
									<h5>Webpack</h5>
									<h5>Static module bundler</h5>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-6">
							<div class="technology">
								<div class="logo">
									<img src="../../icons/brands/bootstrap.svg" alt="Bootstrap logo">
								</div>
								<div class="text">
									<h5>Bootstrap</h5>
									<h5>Front-end component library</h5>
								</div>
							</div>
						</div>
						<div class="col-sm-6">
							<div class="technology">
								<div class="logo">
									<img src="../../icons/brands/flaticon.svg" alt="Flaticon logo">
								</div>
								<div class="text">
									<h5>Flaticon</h5>
									<h5>The largest free icons database</h5>
								</div>
							</div>
						</div>
					</div>
					<h6>and much more ...</h6>
					<br>
					<br>
					<h5 class="subtitle">Know How learned from</h5>
					<h6>stackoverflow.com</h6>
					<h6>learn2code.sk</h6>
					<h6>vuejs.org</h6>
					<h6>vuemastery.com</h6>
					<br>
					<br>
					<h5 class="subtitle">Libraries used in this project</h5>
					<h6>Particles JS</h6>
					<h6>Vibrant JS</h6>
					<h6>Parsley JS</h6>
					<h6>Axios</h6>
					<h6>jQuery</h6>
					<br>
					<br>
					<h5 class="subtitle">Vue Plugins used in this project</h5>
					<h6>Vue Router</h6>
					<h6>Vue Spinner</h6>
					<h6>Vue Dragscroll</h6>
					<h6>Bootstrap Vue</h6>
					<br>
					<br>
					<h5 class="subtitle">Estimate develop time</h5>
					<h6>215 hours</h6>
					<br>
					<br>
					<hr>
					<br>
					<br>
					<div class="thanks">
						<h4>Thank you for</h4>
						<h4>your attention</h4>
						<h4>...</h4>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Credits',
		data () {
			return {
				loaded: false
			}
		}
	}
</script>
