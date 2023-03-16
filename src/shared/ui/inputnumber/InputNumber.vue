<script lang="ts" setup>
import { PropType } from "vue";
import InputText from "../inputtext/InputText.vue";

const props = defineProps({
  modelValue: {
    type: Number as PropType<number | null>,
    default: () => null,
  },

  label: {
    type: String as PropType<string | null>,
    default: () => null,
  },

  step: {
    type: Number as PropType<number>,
    default: () => 1,
  },
});

const emit = defineEmits(["update:modelValue"]);

const onKeydown = (event: KeyboardEvent): void => {
  console.log(event.code);
  if (event.code === "ArrowUp") {
    emit(
      "update:modelValue",
      Number(((props.modelValue ?? 0) + props.step).toFixed(2))
    );
  } else if (event.code === "ArrowDown") {
    emit(
      "update:modelValue",
      Number(((props.modelValue ?? 0) - props.step).toFixed(2))
    );
  }
};
</script>

<template>
  <InputText
    @keydown="onKeydown"
    readonly
    :model-value="(modelValue === 0 ? `` : modelValue).toString()"
    :label="label"
  />
</template>
