<template>
   <div class="window">
      <div class="window-content">
         <div class="pane-group">
            <Sidebar />
            <div class="pane">
               <router-view />
            </div>
         </div>
      </div>
   </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Sidebar from "./components/Sidebar.vue";
import useStore from "@/plugin/store";

export default defineComponent({
   name: "App",
   components: {
      Sidebar,
   },
   setup() {
      const store = useStore();
      store.initStore();
   },
});
</script>
