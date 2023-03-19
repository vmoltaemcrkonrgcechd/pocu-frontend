<script lang="ts" setup>
import { Add } from "@/shared/icons";
import { Dialog, Button } from "@/shared/ui";
import { WeaponForm } from "@/entities/weapon";
import { iWeaponDTO } from "@/shared/types";
import { useWeaponStore } from "@/entities/weapon";
import { ref } from "vue";

const store = useWeaponStore();

const isOpen = ref<boolean>(false);

const onSubmit = (dto: iWeaponDTO): void => {
  store.add(dto).then(() => (isOpen.value = false));
};
</script>

<template>
  <Button :icon="Add" label="Добавить оружие" @click="isOpen = true" />

  <Dialog v-model="isOpen">
    <WeaponForm :icon="Add" @submit="onSubmit" label="Добавить" />
  </Dialog>
</template>
