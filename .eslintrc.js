module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		'plugin:vue/vue3-essential',
		'prettier',
		'@typescript-eslint',
		'plugin:@typescript-eslint/eslint-recommended',
	],
	rules: {
		// override/add rules settings here, such as:
		'vue/no-unused-vars': 'error',
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'import/prefer-default-export': 0,
	},
	parser: '@typescript-eslint/parser',
};
