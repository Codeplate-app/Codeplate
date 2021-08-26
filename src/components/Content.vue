<template>
   <div id="markdown-content" v-html="compiledMarkdown"></div>
</template>

<script lang="ts">
import axios from "axios";
import hljs from "highlight.js";
import { computed, defineComponent, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import marked from "marked";
import DOMPurify from "dompurify";
import useStore from "@/plugin/store";

export default defineComponent({
   name: "Content",
   components: {},
   setup() {
      const markdown = ref("");
      const store = useStore();
      const route = useRoute();
      const router = useRouter();

      const displayContent = (id: string) => {
         const app = store.findAppById(id.toString());

         if (app === undefined) {
            router.push("/");
         } else if (store.existReadme(id.toString())) {
            markdown.value = store.findReadmeById(id.toString())?.content;
         } else {
            axios
               .get(app.readme)
               .then(({ data: content }) => {
                  markdown.value = content;
                  store.addReadme({
                     id: id.toString(),
                     content,
                  });
               })
               .catch();
         }
      };

      displayContent(route.params.id.toString());

      watch(
         () => route.params.id,
         (id, _previousId) => {
            displayContent(id.toString());
         }
      );

      return {
         markdown,
      };
   },
   computed: {
      compiledMarkdown() {
         return marked(this.markdown, {
            highlight(markdown: string, lang: string) {
               const language = hljs.getLanguage(lang) ? lang : "plaintext";
               return hljs.highlight(markdown, { language }).value;
            },
            langPrefix: "hljs language-",
            sanitizer: (markdown: string) => DOMPurify.sanitize(markdown),
         });
      },
   },
   mounted() {
      hljs.highlightAll();
   },
});
</script>

<style lang="scss">
@import "~/highlight.js/scss/atom-one-dark.scss";

#markdown-content {
   padding: 20px;

   & > p > img {
      width: 100%;
      height: auto;
   }
}
</style>
