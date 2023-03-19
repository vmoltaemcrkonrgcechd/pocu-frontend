<script lang="ts" setup>
import { Table, Column } from "@/shared/ui";
import { useWeaponStore } from "@/entities/weapon";
import { onMounted } from "vue";

const store = useWeaponStore();

onMounted(() => store.all());
</script>

<template>
  <Table :rows="store.weapons">
    <Column header="Название" field="name" />
    <Column header="Атака" field="attack" />
    <Column header="Масса" field="weight" />
  </Table>
</template>
