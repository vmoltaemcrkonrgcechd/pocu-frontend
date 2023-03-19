<script lang="ts" setup>
import { Table, Column } from "@/shared/ui";
import { useWeaponStore } from "@/entities/weapon";
import { onMounted } from "vue";
import { WeaponEditForm } from "@/features/weapon-edit-form";

const store = useWeaponStore();

onMounted(() => store.all());
</script>

<template>
  <Table :rows="store.weapons">
    <Column header="Название" field="name" />
    <Column header="Атака" field="attack" />
    <Column header="Масса" field="weight" />
    <Column header="Действия">
      <template v-slot="slotProps">
        <span class="w-full h-full flex justify-center gap-x-2">
          <WeaponEditForm :weapon="slotProps.row" />
        </span>
      </template>
    </Column>
  </Table>
</template>
