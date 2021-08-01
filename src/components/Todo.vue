<template>
	<div class="todo">
		<todo-header></todo-header>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TodoHeader from './TodoHeader.vue';

export default defineComponent({
	components: {
		'todo-header': TodoHeader,
	},
});
</script>

<style lang="scss" scoped>
.todo {
	max-width: var(--max-width-sm);

	padding-right: var(--space-sm);
	padding-left: var(--space-sm);
	margin-right: auto;
	margin-left: auto;
}
</style>
