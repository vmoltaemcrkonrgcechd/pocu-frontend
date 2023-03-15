<script lang="ts" setup>
import { defineProps, PropType, defineEmits, ref } from "vue";

defineProps({
  modelValue: {
    type: Boolean as PropType<boolean>,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);

const dialogContent = ref<any>(null);

const onClick = (event: Event) => {
  if (!event.composedPath().includes(dialogContent.value)) {
    emit("update:modelValue", false);
  }
};
</script>

<template>
  <teleport to="body">
    <div v-if="modelValue" @click="onClick" class="dialog">
      <div ref="dialogContent" class="rounded-md bg-white py-8 px-4">
        <slot />
      </div>
    </div>
  </teleport>
</template>

<style scoped>
.dialog {
  @apply absolute
  top-0
  left-0
  right-0
  bottom-0
  flex
  items-center
  justify-center
  bg-gray-900
  bg-opacity-50;
}
</style>
