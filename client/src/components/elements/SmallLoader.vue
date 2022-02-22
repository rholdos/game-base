<template>
	<transition name="slide-in">
		<div class="loader-small" v-show="loaded" :load="loaded = true">
			<div class="loader-icon">
				<ring-loader color="#BADA55" size="50px"></ring-loader>
			</div>
			<span class="loader-text">{{ this.$props.text }}</span>
		</div>
	</transition>
</template>

<script>
	import RingLoader from 'vue-spinner/src/RingLoader.vue';
	export default {
		name: 'SmallLoader',
		components: { RingLoader },
		props: ['text'],
		data() {
			return {
				loaded: false
			}
		}
	}
</script>
