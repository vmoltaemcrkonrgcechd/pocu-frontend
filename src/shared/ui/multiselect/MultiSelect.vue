<script lang="ts" setup>
import { computed, onMounted, PropType, ref } from "vue";
import Checkbox from "../checkbox/Checkbox.vue";
import InputText from "../inputtext/InputText.vue";
import Button from "../button/Button.vue";

const props = defineProps({
  modelValue: {
    type: Array as PropType<{ [key: string]: any }[]>,
    default: () => [],
  },

  options: {
    type: Array as PropType<{ [key: string]: any }[]>,
    default: () => [],
  },

  optionLabel: {
    type: String as PropType<string>,
    default: () => "",
  },

  label: {
    type: String as PropType<string | null>,
    default: () => null,
  },
});

const emit = defineEmits(["update:modelValue"]);

const selected = ref<{ [key: string]: any }[]>([]);
const isOpen = ref<boolean>(false);
const dropdown = ref<any>(null);

onMounted(() => {
  document.addEventListener("click", (event: Event) => {
    if (!event.composedPath().includes(dropdown.value)) {
      close();
    }
  });
});

const formattedLabel = computed((): string => {
  if (!props.modelValue?.length) {
    return "";
  }

  if (props.modelValue.length === 1) {
    return props.modelValue[0][props.optionLabel];
  }

  return `${props.modelValue[0][props.optionLabel]} + ${
    props.modelValue.length - 1
  }`;
});

const setIsOpen = (): void => {
  if (isOpen.value) {
    close();
  } else {
    selected.value = [...props.modelValue];

    isOpen.value = true;
  }
};

const close = (): void => {
  selected.value = [];

  isOpen.value = false;
};

const apply = (): void => {
  emit("update:modelValue", selected.value);

  setIsOpen();
};
</script>

<template>
  <div class="relative cursor-pointer select-none" ref="dropdown">
    <span @click="setIsOpen">
      <InputText
        disabled
        :label="label"
        :model-value="formattedLabel"
        class="pointer-events-none"
      />
    </span>
    <transition>
      <div
        v-if="isOpen"
        class="absolute w-full text-sm z-10 rounded-md shadow-md bg-white overflow-hidden text-gray-900"
      >
        <ul>
          <Checkbox
            class="py-1.5 px-4 hover:bg-blue-50 w-full"
            v-for="option in options"
            :label="option[optionLabel]"
            v-model="selected"
            :value="option"
          />
        </ul>
        <div class="py-1.5 px-4">
          <Button @click="apply" class="w-full" label="Применить" />
        </div>
      </div>
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
