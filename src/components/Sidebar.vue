<template>
   <div class="pane pane-md sidebar">
      <ul class="list-group">
         <li class="list-group-header">
            <input class="form-control" type="text" placeholder="Search for something" />
         </li>

         <router-link v-for="(app, key) in store.apps" :key="key" :to="`/project/${app.id}`" class="sidebar-link">
            <li class="list-group-item sidebar-link-content">
               <div class="media-body">
                  <strong>{{ app.title }}</strong>
                  <p>{{ app.description }}</p>
                  <p>
                     <span v-for="(language, key) in app.languages" :key="key" class="tag">{{ language }}</span>
                  </p>
               </div>
            </li>
         </router-link>
      </ul>
   </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useStore from "@/plugin/store";

export default defineComponent({
   name: "SideBar",
   components: {},
   setup() {
      const store = useStore();

      return {
         store,
      };
   },
});
</script>

<style lang="scss" scoped>
li.list-group-item {
   // background-color: red;
   padding-left: 15px;
}

.pane-md {
   max-width: 290px;
   min-width: 150px;
}

.sidebar-link {
   color: unset;
   text-decoration: none;

   & .sidebar-link-content:hover {
      background-color: rgb(230, 230, 230);
   }
}

.tag {
   padding: 5px 8px;
   margin-right: 5px;
   background-color: rgba(220, 220, 220);
   border-radius: 50px;
}
</style>
