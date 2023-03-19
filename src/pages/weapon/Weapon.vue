<script lang="ts" setup>
import { PageHeader } from "@/widgets/page-header";
import { Layout } from "@/widgets/layout";
import { WeaponTable } from "@/widgets/weapon-table";
</script>

<template>
  <Layout>
    <PageHeader class="mb-3" title="Оружие"></PageHeader>
    <div>
      <WeaponTable />
    </div>
  </Layout>
</template>
