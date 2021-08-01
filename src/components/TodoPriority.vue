<template>
	<div
		class="todo-priority"
		:tabindex="tabindex"
		:class="{ 'is-open': isOpen }"
		@blur="closeDropdown"
	>
		<div
			class="selected-priority"
			@click="toggleDropdown"
			:data-priority="label"
		>
			<span class="priority-dot"></span>
			<span class="priority-label">
				{{ label }}
			</span>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="512"
				height="512"
				viewBox="0 0 512 512"
				class="icon"
			>
				<title>ionicons-v5-a</title>
				<polyline points="112 184 256 328 400 184" />
			</svg>
		</div>
		<ul class="priority-list">
			<li
				v-for="(priority, index) of priorities"
				:key="index"
				class="priority-item"
				:data-priority="priority"
				@click="selectPriority(priority)"
			>
				<span class="priority-dot"></span>{{ priority }}
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';

export default defineComponent({
	props: {
		defaultLabel: {
			type: String,
			default: '',
			required: false,
		},
		priorities: {
			type: Array as PropType<string[]>,
			default: [],
			required: true,
		},
		tabindex: {
			type: Number,
			default: 0,
			require: false,
		},
	},
	setup({ defaultLabel, priorities }, { emit }) {
		const label = ref('');
		const isOpen = ref(false);

		label.value = defaultLabel
			? defaultLabel
			: priorities.length > 0
			? priorities[0]
			: '';

		const closeDropdown = () => {
			isOpen.value = false;
		};

		const toggleDropdown = () => {
			isOpen.value = !isOpen.value;
		};

		const selectPriority = (priority: string) => {
			label.value = priority;
			closeDropdown();
			emit('input', priority);
		};

		return {
			label,
			isOpen,
			closeDropdown,
			toggleDropdown,
			selectPriority,
		};
	},
});
</script>

<style lang="scss">
.todo-priority {
	--dot-size: 10px;
	--icon-gap: var(--space-xs);

	width: var(--select-width);

	.selected-priority {
		display: flex;
		align-items: center;

		padding: var(--space-xs);
		background-color: var(--color-contrast-low);
		border-radius: var(--radius-xl);

		cursor: pointer;
	}

	.priority-label {
		margin-right: auto;
		margin-left: var(--icon-gap);

		line-height: 16px;
	}

	.priority-dot {
		width: var(--dot-size);
		height: var(--dot-size);

		display: inline-block;

		border: 2px solid hsl(240, 4%, 80%);
		border-radius: var(--radius-md);
	}

	.icon {
		polyline {
			stroke: var(--color-contrast-dark);
			fill: none;
			stroke-linecap: round;
			stroke-linejoin: round;
			stroke-width: 48px;
		}
	}

	.priority-list {
		position: absolute;
		top: calc(100% + 2px);
		left: 0;

		width: 100%;

		background-color: var(--color-contrast-low);
		border-radius: var(--radius-xl);

		opacity: 0;
		visibility: hidden;
		transition: opacity 0.3s ease-in-out;
	}

	.priority-item {
		text-align: left;
		padding: var(--space-xxs) var(--icon-gap);

		cursor: pointer;

		&:not(:last-child) {
			border-bottom: 1px solid var(--color-bg);
		}

		.priority-dot {
			margin-right: var(--icon-gap);
		}
	}

	&.is-open {
		.priority-list {
			opacity: 1;
			visibility: visible;
		}
	}

	[data-priority='medium'] {
		.priority-dot {
			border-color: var(--color-success);
		}
	}

	[data-priority='medium'] {
		.priority-dot {
			border-color: var(--color-warning);
		}
	}

	[data-priority='high'] {
		.priority-dot {
			border-color: var(--color-error);
		}
	}
}
</style>
