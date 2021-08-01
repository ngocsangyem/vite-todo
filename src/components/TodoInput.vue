<template>
	<div contenteditable class="todo-input"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({});
</script>

<style lang="scss" scoped>
.todo-input {
	--height: 30px;

	min-height: var(--height);
	max-height: 150px;
	width: 100%;

	text-align: left;
	line-height: var(--height);

	overflow: auto;

	&:focus {
		outline: none;
	}
}
</style>
