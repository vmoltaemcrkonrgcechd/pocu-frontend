<script lang="ts" setup>
import { PropType, computed } from "vue";
import Check from "../../icons/Check.vue";

const props = defineProps({
  modelValue: {
    type: Array as PropType<{ [key: string]: any }[]>,
    default: () => [],
  },

  value: {
    type: Object as PropType<{ [key: string]: any }>,
  },

  label: {
    type: String as PropType<string | null>,
    default: () => null,
  },
});

const emit = defineEmits(["update:modelValue"]);

const checked = computed((): boolean => {
  return (
    props.modelValue?.filter(
      (i) => JSON.stringify(i) === JSON.stringify(props.value)
    ).length != 0
  );
});

const onClick = (): void => {
  if (checked.value) {
    emit(
      "update:modelValue",
      props.modelValue?.filter((i) => {
        return JSON.stringify(i) !== JSON.stringify(props.value);
      })
    );

    return;
  }

  emit("update:modelValue", [...props.modelValue, props.value]);
};
</script>

<template>
  <div
    @click="onClick"
    class="inline-flex items-center gap-x-2 cursor-pointer select-none"
  >
    <span class="checkbox" :class="{ checked: checked }">
      <Check v-if="checked" class="fill-current pointer-events-none" />
    </span>
    <span v-if="label" class="text-sm text-gray-900 uppercase">{{
      label
    }}</span>
  </div>
</template>

<style scoped>
.checkbox {
  @apply h-6
  w-6
  rounded-md
  border
  border-blue-600
  inline-flex
  items-center
  justify-center;
}

.checked {
  @apply bg-blue-600
  hover:bg-blue-500
  hover:border-blue-500
  text-white;
}
</style>
