<script lang="ts" setup>
import { PropType } from "vue";

defineProps({
  title: {
    type: String as PropType<string>,
    default: () => "",
  },
});
</script>

<template>
  <header
    class="flex items-center justify-between gap-x-3 py-2 px-4 rounded-md shadow-md bg-white"
  >
    <h2 class="uppercase text-sm text-blue-600">{{ title }}</h2>
    <slot />
  </header>
</template>
