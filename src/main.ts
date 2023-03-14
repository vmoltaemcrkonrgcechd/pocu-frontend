import { createApp } from "vue";
import { createPinia } from "pinia";
import Router from "@/app/router";
import App from "@/app/App.vue";

createApp(App).use(createPinia()).use(Router).mount("#app");
