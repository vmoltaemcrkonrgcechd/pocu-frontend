<script lang="ts" setup>
import { InputText, InputNumber, Button } from "@/shared/ui";
import { onMounted, PropType, ref } from "vue";
import { iWeaponDTO } from "@/shared/types";

const props = defineProps({
  init: {
    type: Object as PropType<iWeaponDTO | null>,
    default: () => null,
  },

  label: String as PropType<string>,

  icon: Object as PropType<any>,
});

onMounted(() => {
  if (props.init) {
    name.value = props.init.name;
    attack.value = props.init.attack.toString();
    weight.value = props.init.weight.toString();
  }
});

const emit = defineEmits(["submit"]);

const name = ref<string>("");
const attack = ref<string>("");
const weight = ref<string>("");

const submit = (): void => {
  emit("submit", {
    name: name.value,
    attack: Number(attack.value),
    weight: Number(weight.value),
  });
};
</script>

<template>
  <form
    @submit.prevent
    class="px-4 py-8 rounded-md shadow-md bg-white flex flex-col gap-y-4"
  >
    <InputText label="Название" v-model="name" />
    <InputText label="Атака" v-model="attack" />
    <InputText label="Масса" v-model="weight" />
    <Button @click="submit" :label="label" :icon="icon" />
  </form>
</template>
