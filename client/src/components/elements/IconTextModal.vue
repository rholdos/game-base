<template>
	<div class="icon-text-modal">
		<b-modal :id="$props.modalId" :title="$props.title">
			<div class="icon">
				<img :src="$props.icon" alt="Modal Icon">
			</div>
			<h4 class="my-3">{{ $props.text }}</h4>
		</b-modal>
	</div>
</template>

<script>
	import { globals } from '../../js/globals.js'
	export default {
		name: "IconTextModal",
		props: ['modalId', 'title', 'icon', 'text'],
		mounted() {
			this.emitOnOkButton();
		},
		methods: {
			emitOnOkButton: async function () {
				globals.$jquery(this.$el).find('.btn-primary').click(() => {
					if (this.$props.modalId == 'createClanConfirmModal' || this.$props.modalId == 'acceptClanInvitationModal') {
						this.$root.$emit('rerender-clan');
					}
				});
			}
		}
	}
</script>
