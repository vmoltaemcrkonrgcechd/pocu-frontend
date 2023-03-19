<script lang="ts" setup>
import { PropType, defineEmits, ref, onMounted } from "vue";
import InputText from "../inputtext/InputText.vue";

type option = { [key: string]: any };

const props = defineProps({
  modelValue: {
    type: Object as PropType<option | null>,
    default: () => null,
  },

  options: {
    type: Array as PropType<option[]>,
    default: () => [],
  },

  optionLabel: {
    type: String as PropType<string | null>,
    default: () => null,
  },

  label: {
    type: String as PropType<string | null>,
    default: () => null,
  },
});

const emit = defineEmits(["update:modelValue"]);

const isOpen = ref<boolean>(false);
const dropdown = ref<any>(null);

onMounted(() => {
  document.addEventListener("click", (event: Event) => {
    if (!event.composedPath().includes(dropdown.value)) {
      isOpen.value = false;
    }
  });
});

const isSelected = (option: option): boolean => {
  return JSON.stringify(option) === JSON.stringify(props.modelValue);
};

const onClick = (option: option): void => {
  emit("update:modelValue", option);

  isOpen.value = false;
};
</script>

<template>
  <div class="relative cursor-pointer select-none" ref="dropdown">
    <span @click="isOpen = !isOpen">
      <InputText
        disabled
        :label="label"
        :model-value="modelValue?.[optionLabel]"
        class="pointer-events-none"
      />
    </span>
    <transition>
      <ul
        class="absolute w-full text-sm z-10 rounded-md shadow-md bg-white overflow-hidden text-gray-900"
        v-if="isOpen"
      >
        <li
          @click="onClick(option)"
          class="py-2 px-4 hover:bg-blue-50"
          :class="{ selected: isSelected(option) }"
          v-for="option in options"
        >
          {{ option[optionLabel] }}
        </li>
      </ul>
    </transition>
  </div>
</template>

<style scoped>
.selected {
  @apply text-blue-600
  bg-blue-100;
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
