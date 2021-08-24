import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

import Content from "@/components/Content.vue";
import Empty from "@/components/Empty.vue";

import "@/assets/photonkit/dist/css/photon.min.css";

const routes = [
   { path: "/", component: Empty },
   { path: "/project/:user/:repository", component: Content },
];

const router = createRouter({
   history: createWebHistory(),
   routes,
});

const app = createApp(App);

app.use(router);

app.mount("#app");
