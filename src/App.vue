<template>
	<img alt="Vue logo" src="./assets/logo.png" />
	<todo-header></todo-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TodoHeaderVue from './components/TodoHeader.vue';

export default defineComponent({
	name: 'App',
	components: {
		'todo-header': TodoHeaderVue,
	},
});
</script>

<style lang="scss">
// @import './styles/styles.scss';

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
