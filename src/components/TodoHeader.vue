<template>
	<div class="todo-header">
		<textarea-auto-size
			class="todo-input"
			:min-height="30"
			:max-height="100"
			rows="1"
		></textarea-auto-size>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TextareaAutoSize from './TextareaAutoSize.vue';

export default defineComponent({
	components: {
		'textarea-auto-size': TextareaAutoSize,
	},
});
</script>

<style lang="scss" scoped>
.todo-header {
	--form-control-padding-x: var(--space-md);
	--form-control-padding-y: var(--space-xs);
	--select-width: 2rem;
	--select-gap: var(--space-xxs);

	background-color: var(--color-white);

	border-radius: var(--radius-xl);
	box-shadow: var(--shadow-md);

	padding-right: calc(
		var(--form-control-padding-x) + var(--select-width) + var(--select-gap)
	);
	padding-left: var(--form-control-padding-x);
	padding-top: var(--form-control-padding-y);
	padding-bottom: var(--form-control-padding-y);
}

.todo-input {
	width: 100%;
	vertical-align: middle;
	line-height: 1;
	&:focus {
		outline: none;
	}
}
</style>
