<script lang="ts" setup>
import { PropType, ref } from "vue";

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
    <transition>
      <div v-if="modelValue" @click="onClick" class="dialog">
        <div ref="dialogContent">
          <slot />
        </div>
      </div>
    </transition>
  </teleport>
</template>

<style scoped>
.dialog {
  @apply fixed
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

.v-enter-active,
.v-leave-active {
  @apply transition-all
	duration-150;
}

.v-enter-from,
.v-leave-to {
  @apply translate-y-1
	opacity-0;
}
</style>
