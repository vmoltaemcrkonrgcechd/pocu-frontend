<script lang="ts" setup>
import { PageHeader } from "@/widgets/page-header";
import { Layout } from "@/widgets/layout";
import { WeaponTable } from "@/widgets/weapon-table";
import { WeaponPagination } from "@/widgets/weapon-pagination";
import { WeaponFilter } from "@/widgets/weapon-filter";
</script>

<template>
  <Layout>
    <PageHeader class="mb-3" title="Оружие"></PageHeader>
    <div class="mb-3 grid grid-cols-[2fr_1fr] gap-x-3 items-start">
      <div class="flex flex-col gap-y-3">
        <WeaponTable />
        <WeaponPagination />
      </div>
      <WeaponFilter />
    </div>
  </Layout>
</template>
