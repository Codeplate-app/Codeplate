<template>
   <!-- eslint-disable-next-line vue/no-v-html -->
   <div id="markdown-content" v-html="compiledMarkdown"></div>
</template>

<script lang="ts">
import axios from "axios";
import hljs from "highlight.js";
import { defineComponent, onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import marked from "marked";
import DOMPurify from "dompurify";
import useStore from "@/plugin/store";
import { StoreAppId } from "@/Types/ObjectTypes";

export default defineComponent({
   name: "Content",
   components: {},
   setup() {
      const markdown = ref("");
      const store = useStore();
      const route = useRoute();
      const router = useRouter();

      const displayContent = (id: StoreAppId) => {
         const app = store.findAppById(id);

         if (app === undefined) {
            router.push("/");
         } else if (store.existReadme(app.id.toString())) {
            markdown.value = store.findReadmeById(app.id.toString())?.content;
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

      displayContent({
         user: route.params.user.toString(),
         repo: route.params.repo.toString(),
      });

      return {
         markdown,
         displayContent,
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
   watch: {
      "$route.params": {
         handler(to, _from) {
            this.displayContent(to);
         },
         immediate: true,
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
}
</style>
