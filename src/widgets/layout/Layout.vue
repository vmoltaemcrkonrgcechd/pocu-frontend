<template>
  <div class="grid grid-cols-[1fr_5fr] bg-blue-50">
    <aside class="h-screen bg-white shadow-md flex flex-col py-8 px-4">
      <router-link class="router-link" v-ripple to="/weapon"
        >Оружие</router-link
      >
    </aside>
    <div class="py-8 px-16 w-full h-full">
      <slot />
    </div>
  </div>
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
