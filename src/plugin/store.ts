import { defineStore } from "pinia";
import { nanoid } from "nanoid";
import { AppType, ReadmeType } from "@/Types/ObjectTypes";

const useStore = defineStore("main", {
   state: () => ({
      apps: [] as Array<AppType>,
      readme: [] as Array<ReadmeType>,
   }),
   actions: {
      addApp(app: AppType) {
         app.id = nanoid();
         this.apps.push(app);
      },
      addReadme(readme: ReadmeType) {
         this.readme.push(readme);
      },
      findAppById(id: string) {
         return this.apps.find((element) => element.id === id);
      },
      existApp(id: string): boolean {
         return this.findAppById(id) !== undefined;
      },
      findReadmeById(id: string) {
         return this.readme.find((element) => element.id === id);
      },
      existReadme(id: string): boolean {
         return this.findReadmeById(id) !== undefined;
      },
   },
});

export default useStore;
