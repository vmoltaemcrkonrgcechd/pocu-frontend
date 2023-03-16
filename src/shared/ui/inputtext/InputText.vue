<script lang="ts" setup>
import { PropType, defineEmits, computed } from "vue";

const props = defineProps({
  modelValue: {
    type: String as PropType<string | null>,
    default: () => null,
  },

  label: {
    type: String as PropType<string | null>,
    default: () => null,
  },
});

const emit = defineEmits(["update:modelValue"]);

const onInput = (event: any): void => {
  emit("update:modelValue", event.target.value);
};

const inputClass = computed(() => {
  return {
    input: true,
    filled: props.modelValue && props.modelValue.toString().length,
  };
});
</script>

<template>
  <label class="relative text-sm flex bg-inherit">
    <input :class="inputClass" :value="modelValue" @input="onInput" />
    <span v-if="label" class="label">{{ label }}</span>
  </label>
</template>

<style scoped>
.input {
  @apply py-2
  px-4
  rounded-md
  text-gray-900
  outline-none
  border
  border-blue-600;
}

.label {
  @apply absolute
  top-1/2
  translate-y-[-50%]
  left-3
  text-gray-400
  overflow-hidden
  whitespace-nowrap
  text-clip
  select-none
  pointer-events-none
  bg-inherit
  transition-all
  px-1;
}

.input:focus + .label,
.filled + .label {
  @apply top-0
  text-xs
  text-blue-600
  right-auto;
}
</style>
