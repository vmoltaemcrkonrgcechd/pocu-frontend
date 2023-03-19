<script lang="ts" setup>
import { PropType, ref } from "vue";
import "../ripple/ripple.css";

const props = defineProps({
  totalRecords: {
    type: Number as PropType<number | null>,
    default: () => null,
  },

  rowsPerPage: {
    type: Number as PropType<number>,
    default: () => 10,
  },

  modelValue: {
    type: Number as PropType<number>,
    default: () => 0,
  },
});

const emit = defineEmits(["update:modelValue"]);

const setCurrent = (i: number): void => {
  emit("update:modelValue", i);
};
</script>

<template>
  <div class="flex items-center gap-x-1">
    <span
      @click="setCurrent(i)"
      v-ripple
      class="page"
      :class="{ current: i === modelValue }"
      v-for="(_, i) in new Array(Math.ceil(totalRecords / rowsPerPage))"
      >{{ (i + 1).toString() }}</span
    >
  </div>
</template>

<style scoped>
.page {
  @apply relative
  overflow-hidden
  cursor-pointer
  select-none
  h-6
  w-6
  flex
  items-center
  justify-center
  rounded-md
  hover:bg-blue-100
  text-blue-600
  text-sm
  border
  border-blue-600;
}

.current {
  @apply text-white
  bg-blue-600
  hover:bg-blue-500
  border-blue-600
  hover:border-blue-500;
}
</style>
