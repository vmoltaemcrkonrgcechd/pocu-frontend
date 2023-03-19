<script lang="ts" setup>
import { WeaponForm } from "@/entities/weapon";
import { Button, Dialog } from "@/shared/ui";
import { Edit } from "@/shared/icons";
import { PropType, ref } from "vue";
import { iWeapon, iWeaponDTO } from "@/shared/types";
import { useWeaponStore } from "@/entities/weapon";

const store = useWeaponStore();

const props = defineProps({
  weapon: {
    type: Object as PropType<iWeapon>,
    required: true,
  },
});

const isOpen = ref<boolean>(false);

const onSubmit = (dto: iWeaponDTO): void => {
  store.edit(dto, props.weapon.id).then(() => (isOpen.value = false));
};
</script>

<template>
  <Button pure :icon="Edit" @click="isOpen = true" />

  <Dialog v-model="isOpen">
    <WeaponForm
      :icon="Edit"
      :init="weapon"
      @submit="onSubmit"
      label="Редактировать"
    />
  </Dialog>
</template>
