<script lang="ts" setup>
import { Delete } from "@/shared/icons";
import { Dialog, Button } from "@/shared/ui";
import { PropType, ref } from "vue";
import { useWeaponStore } from "@/entities/weapon";

const props = defineProps({
  id: {
    type: Number as PropType<number>,
    required: true,
  },
});

const store = useWeaponStore();

const isOpen = ref<boolean>(false);

const onClick = (): void => {
  store.remove(props.id).then(() => (isOpen.value = false));
};
</script>

<template>
  <Button pure :icon="Delete" @click="isOpen = true" />

  <Dialog v-model="isOpen">
    <form
      @submit.prevent
      class="py-8 px-4 flex flex-col gap-y-4 rounded-md bg-white shadow-md"
    >
      <p class="text-sm text-gray-900">
        Вы уверены, что хотите удалить оружие?
      </p>
      <div class="grid grid-cols-2 gap-x-4 w-full">
        <Button @click="onClick" danger label="Да" />
        <Button @click="isOpen = false" label="Нет" />
      </div>
    </form>
  </Dialog>
</template>
