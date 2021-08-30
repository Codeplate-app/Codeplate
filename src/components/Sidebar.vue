<template>
   <div class="pane pane-md sidebar">
      <ul class="list-group">
         <li class="list-group-header">
            <input v-model="search" class="form-control" type="text" placeholder="Search for something" @keypress="updateSearch" />
         </li>

         <router-link v-for="app in apps" :key="app.id" :to="{ name: 'app_boilerplate', params: { user: app.user, repo: app.repo } }" class="sidebar-link">
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
import { defineComponent, ref } from "vue";
import useStore from "@/plugin/store";
import { StoreAppType } from "@/Types/ObjectTypes";

export default defineComponent({
   name: "SideBar",
   components: {},
   setup() {
      const store = useStore();
      const search = ref("");

      let { apps } = store;

      const updateSearch = () => {
         if (search.value === "") {
            apps = store.apps;
         }
         apps = apps.filter((app: StoreAppType) => app.title.includes(search.value));
      };

      return {
         apps,
         search,
         updateSearch,
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
