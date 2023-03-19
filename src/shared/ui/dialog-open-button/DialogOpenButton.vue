<script lang="ts" setup>
import Dialog from "../dialog/Dialog.vue";
import Button from "../button/Button.vue";
import { PropType, ref } from "vue";

defineProps({
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

const isOpen = ref<boolean>(false);
</script>

<template>
  <Button
    :label="label"
    :danger="danger"
    :pure="pure"
    :icon="icon"
    @click="isOpen = true"
  />

  <Dialog v-model="isOpen">
    <slot />
  </Dialog>
</template>
