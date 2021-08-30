import { createRouter, createWebHistory } from "vue-router";
import { checkBoilerplateValidity } from "./utils/routerUtils";

import Content from "@/components/Content.vue";
import Empty from "@/components/Empty.vue";

const routes = [
   { path: "/", component: Empty, name: "app_home" },
   { path: "/project/:user/:repo", component: Content, name: "app_boilerplate", beforeEnter: checkBoilerplateValidity },
   { path: "/:pathMatch(.*)*", redirect: { name: "app_home" } },
];

const router = createRouter({
   history: createWebHistory(),
   routes,
});

export default router;
