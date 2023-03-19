<script lang="ts" setup>
import { InputText, InputNumber, Button } from "@/shared/ui";
import { ref } from "vue";

const emit = defineEmits(["submit"]);

const name = ref<string>("");
const attack = ref<number>(0);
const weight = ref<number>(0);

const submit = (): void => {
  emit("submit", {
    name: name.value,
    attack: attack.value,
    weight: weight.value,
  });
};
</script>

<template>
  <form
    @submit.prevent
    class="px-4 py-8 rounded-md shadow-md bg-white flex flex-col gap-y-4"
  >
    <InputText label="Название" v-model="name" />
    <InputNumber label="Атака" v-model="attack" :step="0.1" />
    <InputNumber label="Масса" v-model="weight" :step="0.1" />
    <Button @click="submit" label="Добавить" />
  </form>
</template>
