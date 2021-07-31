<template>
	<textarea
		ref="textareaEl"
		v-model="val"
		:style="computedStyles"
		@focus="resize"
	></textarea>
</template>

<script lang="ts">
import {
	computed,
	defineComponent,
	ref,
	onMounted,
	nextTick,
	Ref,
	watch,
} from 'vue';

export default defineComponent({
	props: {
		value: {
			type: [String, Number],
			default: '',
		},
		autosize: {
			type: Boolean,
			default: true,
		},
		minHeight: {
			type: [Number],
			default: null,
		},
		maxHeight: {
			type: [Number],
			default: null,
		},
	},
	setup(props, { emit }) {
		const val = ref(null);
		const maxHeightScroll = ref(false);
		const height = ref('auto');
		const textareaEl = ref(null) as Ref<HTMLTextAreaElement>;
		val.value = props.value;

		const computedStyles = computed(() => {
			if (!props.autosize) return {};

			return {
				resize: 'none',
				height: height.value,
				overflow: maxHeightScroll ? 'auto' : 'hidden',
			};
		});

		const resize = () => {
			height.value = 'auto';
			nextTick(() => {
				let contentHeight = textareaEl.value.scrollHeight + 1;
				const minHeight = props.minHeight;
				const maxHeight = props.maxHeight;

				if (minHeight) {
					contentHeight =
						contentHeight < minHeight ? minHeight : contentHeight;
				}

				if (maxHeight) {
					if (contentHeight > maxHeight) {
						contentHeight = maxHeight;
						maxHeightScroll.value = true;
					} else {
						maxHeightScroll.value = false;
					}
				}
				height.value = `${contentHeight}px`;
			});
		};

		watch(val, (newValue) => {
			nextTick(resize);
			emit('input', newValue);
		});

		onMounted(() => {
			resize();
		});

		return {
			val,
			computedStyles,
			textareaEl,
			resize,
		};
	},
});
</script>
