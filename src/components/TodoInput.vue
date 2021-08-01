<template>
	<div contenteditable class="todo-input"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({});
</script>

<style lang="scss">
.todo-input {
	min-height: calc(var(--height) + var(--form-control-padding-y));
	line-height: calc(var(--height) + var(--form-control-padding-y));
}
</style>

<style lang="scss" scoped>
.todo-input {
	--height: 30px;

	max-height: 60px;
	width: 100%;

	text-align: left;
	overflow: auto;

	&:focus {
		outline: none;
	}
}
</style>
