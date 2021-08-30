import { defineStore } from "pinia";
import { nanoid } from "nanoid";
import axios from "axios";
import { AppType, GithubFileType, ReadmeType, StoreAppId, StoreAppType } from "@/Types/ObjectTypes";

const useStore = defineStore("main", {
   state: () => ({
      apps: [] as Array<StoreAppType>,
      readme: [] as Array<ReadmeType>,
      limit: 20 as number,
      total: -1 as number,
   }),
   actions: {
      initStore() {
         // Get all app files
         axios
            .get("https://api.github.com/repos/MrAnyx/CodePlate-App/contents/apps")
            .then(({ data: apps }) => {
               apps.forEach((file: GithubFileType) => {
                  // Get app info
                  axios
                     .get(file.download_url)
                     .then(({ data: appInfo }) => {
                        this.addApp(appInfo);
                     })
                     .catch((err) => {
                        console.error(err);
                     });
               });
            })
            .catch((err) => {
               console.error(err);
            });
      },
      sortApps() {
         this.apps = this.apps.sort((a: StoreAppType, b: StoreAppType) => {
            const fa = a.title.toLowerCase();
            const fb = b.title.toLowerCase();

            if (fa < fb) {
               return -1;
            }
            if (fa > fb) {
               return 1;
            }
            return 0;
         });
      },
      async addApp(app: AppType) {
         const appStore = app as StoreAppType;
         appStore.id = nanoid();

         appStore.user = appStore.projectUrl.split("/")[3];
         appStore.repo = appStore.projectUrl.split("/")[4];

         if (!appStore.readme) {
            await axios
               .get("https://api.github.com/repos/Codeplate-app/Codeplate-Apps/readme")
               .then(({ data }) => {
                  appStore.readme = data.download_url;
               })
               .catch((err) => {
                  console.error(err);
               });
         }

         this.apps.push(appStore);
      },
      addReadme(readme: ReadmeType) {
         this.readme.push(readme);
      },
      findAppById(id: StoreAppId): StoreAppType | undefined {
         return this.apps.find((element: StoreAppType) => element.user === id.user && element.repo === id.repo);
      },
      existApp(id: StoreAppId): boolean {
         return this.findAppById(id) !== undefined;
      },
      findReadmeById(id: string): ReadmeType | undefined {
         return this.readme.find((element: ReadmeType) => element.id === id);
      },
      existReadme(id: string): boolean {
         return this.findReadmeById(id) !== undefined;
      },
   },
});

export default useStore;
