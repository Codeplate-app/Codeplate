import { defineStore } from "pinia";
import { AppType, ReadmeType } from "@/Types/ObjectTypes";
import { nanoid } from "nanoid";

const useStore = defineStore("main", {
   state: () => ({
      apps: [] as Array<AppType>,
      readme: [] as Array<ReadmeType>
   }),
   actions: {
      addApp(app: AppType) {
         app.id = nanoid();
         this.apps.push(app);
      },
      addReadme(readme: ReadmeType) {
         readme.id = nanoid();
         this.readme.push(readme);
      },
      findAppById(id: string) {
         return this.apps.find(element => element.id === id);
      },
      existApp(id: string): boolean {
         return this.findAppById(id) !== undefined;
      },
      findReadmeById(id: string) {
         return this.readme.find(element => element.id === id);
      },
      existReadme(id: string): boolean {
         return this.findReadmeById(id) !== undefined;
      }
   },
});

export default useStore;
