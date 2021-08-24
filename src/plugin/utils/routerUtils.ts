import { RouteLocationNormalized } from "vue-router";
import useStore from "@/plugin/store";

const checkBoilerplateValidity = (
   to: RouteLocationNormalized,
   _from: RouteLocationNormalized,
   next: Function
) => {

   const store = useStore();
   if(store.existApp(to.params.id.toString())) {
      return next();
   }

   return next({ name: "app_home" });
};

export { checkBoilerplateValidity };
