<template>
   <div class="window">
      <!-- Your app's content goes inside .window-content -->
      <div class="window-content">
         <div class="pane-group">
            <div class="pane pane-sm sidebar">
               <nav class="nav-group">
                  <h5 class="nav-group-title">Favorites</h5>
                  <a class="nav-group-item active">
                     <span class="icon icon-home"></span>
                     connors
                  </a>
                  <span class="nav-group-item">
                     <span class="icon icon-download"></span>
                     Downloads
                  </span>
                  <span class="nav-group-item">
                     <span class="icon icon-folder"></span>
                     Documents
                  </span>
                  <span class="nav-group-item">
                     <span class="icon icon-signal"></span>
                     AirPlay
                  </span>
                  <span class="nav-group-item">
                     <span class="icon icon-print"></span>
                     Applications
                  </span>
                  <span class="nav-group-item">
                     <span class="icon icon-cloud"></span>
                     Desktop
                  </span>
               </nav>
            </div>

            <div class="pane">
               <table class="table-striped">
                  <thead>
                     <tr>
                        <th>Name</th>
                        <th>Kind</th>
                        <th>Date Modified</th>
                        <th>Author</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td>bars.scss</td>
                        <td>Document</td>
                        <td>Oct 13, 2015</td>
                        <td>connors</td>
                     </tr>
                     <tr>
                        <td>base.scss</td>
                        <td>Document</td>
                        <td>Oct 13, 2015</td>
                        <td>connors</td>
                     </tr>
                     <tr>
                        <td>button-groups.scss</td>
                        <td>Document</td>
                        <td>Oct 13, 2015</td>
                        <td>connors</td>
                     </tr>
                     <tr>
                        <td>buttons.scss</td>
                        <td>Document</td>
                        <td>Oct 13, 2015</td>
                        <td>connors</td>
                     </tr>
                     <tr>
                        <td>docs.scss</td>
                        <td>Document</td>
                        <td>Oct 13, 2015</td>
                        <td>connors</td>
                     </tr>
                     <tr>
                        <td>forms.scss</td>
                        <td>Document</td>
                        <td>Oct 13, 2015</td>
                        <td>connors</td>
                     </tr>
                     <tr>
                        <td>grid.scss</td>
                        <td>Document</td>
                        <td>Oct 13, 2015</td>
                        <td>connors</td>
                     </tr>
                     <tr>
                        <td>icons.scss</td>
                        <td>Document</td>
                        <td>Oct 13, 2015</td>
                        <td>connors</td>
                     </tr>
                     <tr>
                        <td>images.scss</td>
                        <td>Document</td>
                        <td>Oct 13, 2015</td>
                        <td>connors</td>
                     </tr>
                     <tr>
                        <td>lists.scss</td>
                        <td>Document</td>
                        <td>Oct 13, 2015</td>
                        <td>connors</td>
                     </tr>
                     <tr>
                        <td>mixins.scss</td>
                        <td>Document</td>
                        <td>Oct 13, 2015</td>
                        <td>connors</td>
                     </tr>
                     <tr>
                        <td>navs.scss</td>
                        <td>Document</td>
                        <td>Oct 13, 2015</td>
                        <td>connors</td>
                     </tr>
                     <tr>
                        <td>normalize.scss</td>
                        <td>Document</td>
                        <td>Oct 13, 2015</td>
                        <td>connors</td>
                     </tr>
                     <tr>
                        <td>photon.scss</td>
                        <td>Document</td>
                        <td>Oct 13, 2015</td>
                        <td>connors</td>
                     </tr>
                     <tr>
                        <td>tables.scss</td>
                        <td>Document</td>
                        <td>Oct 13, 2015</td>
                        <td>connors</td>
                     </tr>
                     <tr>
                        <td>tabs.scss</td>
                        <td>Document</td>
                        <td>Oct 13, 2015</td>
                        <td>connors</td>
                     </tr>
                     <tr>
                        <td>utilities.scss</td>
                        <td>Document</td>
                        <td>Oct 13, 2015</td>
                        <td>connors</td>
                     </tr>
                     <tr>
                        <td>variables.scss</td>
                        <td>Document</td>
                        <td>Oct 13, 2015</td>
                        <td>connors</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Sidebar from "./components/Sidebar.vue";

export default defineComponent({
   name: "App",
   components: { Sidebar },
});
</script>
