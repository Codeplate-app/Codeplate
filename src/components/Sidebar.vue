<template>
   <div class="pane pane-md sidebar">
      <ul class="list-group">
         <li class="list-group-header">
            <input class="form-control" type="text" placeholder="Search for something"/>
         </li>
			
		 <router-link to="/project/MrAnyx/Codeplate" class="sidebar-link" v-for="app in apps">
			 <li class="list-group-item sidebar-link-content">
				   <div class="media-body">
					  	<strong>{{ app.title }}</strong>
					  	<p>{{ app.description }}</p>
					  	<p>
							<span v-for="language in app.languages" class="tag">{{ language }}</span>
						</p>
				   </div>
			 </li>
         </router-link>
			
      </ul>
   </div>
</template>

<script setup lang="ts">

	import axios from "axios";
	import {ref} from "vue";
	
	let apps = [];
	
	// Get all app files
	axios.get("https://api.github.com/repos/MrAnyx/CodePlate-App/contents/apps")
		.then(({data}) => {
			data.forEach(file => {
				// Get app info
				axios.get(file.download_url)
					.then(({data}) => {
						apps.push(data);
						// Get readme file
						axios.get(data.readme)
							.then(({data}) => {
								apps.push()
							})
							.catch((err) => {
								console.error(err);
							});
					}).catch((err) => {
						console.error(err);
				});
			});
		})
		.catch((err) => {
			console.error(err);
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
