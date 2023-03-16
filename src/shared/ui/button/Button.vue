<script lang="ts" setup>
import { PropType, computed } from "vue";
import "../ripple/ripple.css";

const props = defineProps({
  label: {
    type: String as PropType<string | null>,
    default: () => null,
  },

  icon: {
    type: Object as PropType<any>,
    default: null,
  },

  danger: {
    type: Boolean as PropType<boolean>,
    default: () => false,
  },

  pure: {
    type: Boolean as PropType<boolean>,
    default: () => false,
  },
});

const buttonClass = computed(() => {
  return {
    button: true,
    danger: props.danger,
    "only-icon": props.icon && !props.label,
    pure: props.pure,
  };
});
</script>

<template>
  <button v-ripple :class="buttonClass">
    <component
      v-if="icon"
      :is="icon"
      class="fill-current pointer-events-none"
    />
    <span v-if="label" class="pointer-events-none">{{ label }}</span>
  </button>
</template>

<style scoped>
.button {
  @apply py-2
	px-4
	bg-blue-600
	hover:bg-blue-500
	rounded-md
	text-white
	uppercase
	font-medium
	inline-flex
	items-center
	gap-x-2
	text-sm
	transition-colors
	relative
	overflow-hidden;
}

.danger {
  @apply bg-red-600
	hover:bg-red-500;
}

.only-icon {
  @apply justify-center
	px-2
	rounded-full;
}

.pure {
  @apply p-0.5
  bg-inherit
  text-gray-900
  hover:bg-gray-900
  hover:bg-opacity-10;
}
</style>
