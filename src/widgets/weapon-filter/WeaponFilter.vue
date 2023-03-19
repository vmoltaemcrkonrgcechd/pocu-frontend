<script lang="ts" setup>
import { Dropdown, Button } from "@/shared/ui";
import { ref } from "vue";
import { iOrderByOption } from "@/shared/types";
import { useWeaponStore } from "@/entities/weapon";

const store = useWeaponStore();

const orderByValue = ref<iOrderByOption | null>(null);

const orderByOptions: iOrderByOption[] = [
  {
    label: "Возрастанию атаки",
    field: "attack",
    keyword: "asc",
  },
  {
    label: "Убыванию атаки",
    field: "attack",
    keyword: "desc",
  },
];

const apply = (): void => {
  store.setFilter({
    attack: null,
    orderBy:
      orderByValue.value !== null
        ? [orderByValue.value.field, orderByValue.value.keyword]
        : null,
    weight: null,
  });
};
</script>

<template>
  <form
    @submit.prevent
    class="rounded-md shadow-md py-8 px-4 flex flex-col gap-y-4 bg-white"
  >
    <Dropdown
      v-model="orderByValue"
      :options="orderByOptions"
      option-label="label"
      label="Сортировать по"
    />

    <Button @click="apply" label="Применить" />
  </form>
</template>
