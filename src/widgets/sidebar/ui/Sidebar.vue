<script lang="ts" setup></script>

<template>
  <aside class="h-screen w-72 bg-white shadow-md flex flex-col py-8 px-4">
    <router-link class="router-link" v-ripple to="/weapon">Оружие</router-link>
  </aside>
</template>

<style scoped>
.router-link {
  @apply uppercase
  relative
  overflow-hidden
  py-2
  px-4
  rounded-md
  hover:bg-blue-100
  text-blue-600
  text-sm
  border
  border-blue-600;
}

.router-link-active {
  @apply bg-blue-600
  hover:bg-blue-500
  text-white
  hover:border-blue-500;
}
</style>
