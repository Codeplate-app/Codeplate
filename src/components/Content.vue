<template>
   <h1>{{ route.params.user }}</h1>
</template>

<script setup lang="ts">
	
	import { useRoute } from 'vue-router';
	import { watch } from 'vue';
	
	const route = useRoute();

</script>
