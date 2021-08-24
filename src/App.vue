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
import Sidebar from "./components/Sidebar.vue";
import useStore from "@/plugin/store";
import axios from "axios";
import { defineComponent } from "vue";
import { GithubFileType, AppType } from "./Types/ObjectTypes";

export default defineComponent({
   name: "App",
   components: {
      Sidebar
   },
   setup() {
      
      const store = useStore();

      // Get all app files
      axios
         .get("https://api.github.com/repos/MrAnyx/CodePlate-App/contents/apps")
         .then(({ data }) => {
            data.forEach((file: GithubFileType) => {
               // Get app info
               axios
                  .get(file.download_url)
                  .then(({ data }) => {
                     store.addApp(data)
                  })
                  .catch((err) => {
                     console.error(err);
                  });
            });
         })
         .catch((err) => {
            console.error(err);
         });
   }
})

</script>
