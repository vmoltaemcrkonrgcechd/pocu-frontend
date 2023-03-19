<script lang="ts" setup>
import { Paginator } from "@/shared/ui";
import { useWeaponStore } from "@/entities/weapon";

const store = useWeaponStore();
</script>

<template>
  <Paginator
    :total-records="store.quantity"
    :rows-per-page="store.rowsPerPage"
    :current="store.page"
    @set-current="store.setPage"
  />
</template>
