<template>
	<div class="todo-header">
		<textarea-auto-size
			:min-height="minHeight"
			:max-height="maxHeight"
		></textarea-auto-size>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import TextareaAutoSize from './TextareaAutoSize.vue';

export default defineComponent({
	components: {
		'textarea-auto-size': TextareaAutoSize,
	},
	setup() {
		const minHeight = ref(50);
		const maxHeight = ref(300);
		const value = ref('');

		return {
			minHeight,
			maxHeight,
			value,
		};
	},
});
</script>
