import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "@/plugin/router";

import "@/assets/photonkit/dist/css/photon.min.css";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);

app.mount("#app");
