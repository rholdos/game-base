
<template>
	<div class="timeline">
		<div class="timeline-title" v-if="$props.title">{{ $props.title }}</div>
		<div class="timeline-items">
			<div v-for="(release, index) in $props.releases">
				<div class="item">
					<div class="row">
						<div class="col-5 left-panel">
							<h6 class="date">{{ release.first_release_date }}</h6>
							<h5 class="name">{{ release.name }}</h5>
						</div>
						<img class="timeline-icon" src="../../icons/dashboard.svg" alt="Icon">
						<div class="col-7 right-panel">
							<h6 class="company">{{ release.company }}</h6>
							<h6 class="genres">{{ release.genres }}</h6>
							<p class="summary">{{ release.summary }}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Timeline',
		props: ['title', 'releases']
	}
</script>
