<template>
   <div v-html="compiledMarkdown"></div>
</template>

<script lang="ts">
import useStore from "@/plugin/store";
import axios from "axios";
import hljs from "highlight.js";
import { computed, defineComponent, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import marked from "marked";
import DOMPurify from "dompurify";

export default defineComponent({
	name: "Content",
	components: {},
	setup() {
		const markdown = ref("");
		const store = useStore();
		const route = useRoute();
		const router = useRouter();


		const displayContent = (id: string) => {
			let app = store.findAppById(id.toString());

			if(app === undefined) {
				router.push("/");
			} else {
				if(store.existReadme(id.toString())) {
					// markdown.value = store.findReadmeById(id.toString())?.content;
				} else {
					axios
						.get(app.readme)
						.then(({data: content}) => {
							markdown.value = content;
							store.addReadme({
								id: id.toString(),
								content
							})
						})
						.catch();
				}
			}
		}
		
		displayContent(route.params.id.toString());

		watch(
			() => route.params.id,
			(id, _previousId) => {
				displayContent(id.toString());
			}
		)

		return {
			markdown
		}

	},
	mounted() {
    hljs.highlightAll();
	},
	computed: {
    compiledMarkdown() {

      return marked(/*DOMPurify.sanitize(*/this.markdown/*)*/, {
        highlight: function(markdown, lang) {
				const language = hljs.getLanguage(lang) ? lang : 'plaintext';
				return hljs.highlight(markdown, { language }).value;
        },
		  langPrefix: 'hljs language-'
      })
    }
  }
})
</script>

<style lang="scss">

@import "~/highlight.js/scss/atom-one-dark.scss";

</style>
