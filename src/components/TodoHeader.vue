<template>
	<div class="todo-header">
		<todo-input></todo-input>
		<todo-priority
			class="custom-select"
			:priorities="priorities"
			:default-label="'priority'"
		></todo-priority>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import TextareaAutoSize from './TextareaAutoSize.vue';
import TodoInput from './TodoInput.vue';
import TodoPriority from './TodoPriority.vue';

export default defineComponent({
	components: {
		'textarea-auto-size': TextareaAutoSize,
		'todo-input': TodoInput,
		'todo-priority': TodoPriority,
	},
	setup() {
		const priorities = ref(['low', 'medium', 'high']);

		return {
			priorities,
		};
	},
});
</script>

<style lang="scss">
:root {
	--form-control-padding-x: var(--space-md);
	--form-control-padding-y: var(--space-xs);
	--select-width: 120px;
	--select-gap: var(--space-xxs);
}
</style>

<style lang="scss" scoped>
.todo-header {
	background-color: var(--color-white);

	border-radius: var(--radius-xl);
	box-shadow: var(--shadow-md);

	padding-right: calc(
		var(--form-control-padding-x) + var(--select-width) + var(--select-gap)
	);
	padding-left: var(--form-control-padding-x);
	padding-top: var(--form-control-padding-y);
	padding-bottom: var(--form-control-padding-y);

	position: relative;
}

.custom-select {
	position: absolute;
	top: var(--form-control-padding-y);
	right: var(--form-control-padding-x);
}
</style>
