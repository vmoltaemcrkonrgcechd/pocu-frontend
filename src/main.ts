import { createApp } from "vue";
import { createPinia } from "pinia";
import Router from "@/app/router";
import App from "@/app/App.vue";
import { Ripple } from "@/shared/ui";

createApp(App)
  .directive("ripple", Ripple)
  .use(createPinia())
  .use(Router)
  .mount("#app");
